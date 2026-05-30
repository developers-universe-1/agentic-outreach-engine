import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

export class McpOutreachEngine implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'MCP Outreach Engine',
		name: 'mcpOutreachEngine',
		icon: 'file:mcpoutreach.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"]}}',
		description: 'Sequence orchestration, reply classification, auto-tuning, and channel performance via MCP',
		defaults: {
			name: 'MCP Outreach Engine',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'mcpOutreachEngineApi',
				required: false,
			},
		],
		properties: [
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Create Sequence',
						value: 'createSequence',
						action: 'Create a multi-channel sequence',
					},
					{
						name: 'Classify Reply',
						value: 'classifyReply',
						action: 'Classify reply intent with AI',
					},
					{
						name: 'Get Tuning Recommendations',
						value: 'getTuning',
						action: 'Get weekly AI tuning recommendations',
					},
					{
						name: 'Get Channel Performance',
						value: 'getChannelPerformance',
						action: 'Get channel performance metrics',
					},
					{
						name: 'Get Lead Status',
						value: 'getLeadStatus',
						action: 'Get lead sequence status',
					},
				],
				default: 'getChannelPerformance',
			},
			{
				displayName: 'Channel',
				name: 'channel',
				type: 'options',
				options: [
					{ name: 'Email', value: 'email' },
					{ name: 'LinkedIn', value: 'linkedin' },
					{ name: 'Cold Call', value: 'cold_call' },
				],
				default: 'email',
				displayOptions: {
					show: {
						operation: ['createSequence', 'getChannelPerformance'],
					},
				},
			},
			{
				displayName: 'Reply Text',
				name: 'replyText',
				type: 'string',
				typeOptions: {
					rows: 4,
				},
				default: '',
				displayOptions: {
					show: {
						operation: ['classifyReply'],
					},
				},
			},
			{
				displayName: 'Campaign ID',
				name: 'campaignId',
				type: 'string',
				default: '',
				displayOptions: {
					show: {
						operation: ['getTuning'],
					},
				},
			},
			{
				displayName: 'Lead ID',
				name: 'leadId',
				type: 'string',
				default: '',
				displayOptions: {
					show: {
						operation: ['getLeadStatus'],
					},
				},
			},
		] as INodeProperties[],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const operation = this.getNodeParameter('operation', 0) as string;
		const credentials = await this.getCredentials('mcpOutreachEngineApi');
		const baseUrl = (credentials?.baseUrl as string) || 'http://localhost:3000';

		for (let i = 0; i < items.length; i++) {
			try {
				let endpoint = '';
				let method = 'GET';
				let body: Record<string, unknown> | undefined;

				if (operation === 'getChannelPerformance') {
					const channel = this.getNodeParameter('channel', i) as string;
					endpoint = `/api/outreach/performance?channel=${channel}`;
				} else if (operation === 'createSequence') {
					const channel = this.getNodeParameter('channel', i) as string;
					endpoint = '/api/outreach/sequences';
					method = 'POST';
					body = { channel };
				} else if (operation === 'classifyReply') {
					const replyText = this.getNodeParameter('replyText', i) as string;
					endpoint = '/api/outreach/replies/classify';
					method = 'POST';
					body = { replyText };
				} else if (operation === 'getTuning') {
					const campaignId = this.getNodeParameter('campaignId', i) as string;
					endpoint = `/api/outreach/tuning?campaign=${campaignId}`;
				} else if (operation === 'getLeadStatus') {
					const leadId = this.getNodeParameter('leadId', i) as string;
					endpoint = `/api/outreach/leads/${leadId}/status`;
				}

				const options: RequestInit = {
					method,
					headers: {
						'Content-Type': 'application/json',
					},
				};
				if (body) options.body = JSON.stringify(body);

				const response = await fetch(`${baseUrl}${endpoint}`, options);
				const data = await response.json();

				returnData.push({
					json: data,
					pairedItem: { item: i },
				});
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({
						json: { error: (error as Error).message },
						pairedItem: { item: i },
					});
					continue;
				}
				throw error;
			}
		}

		return [returnData];
	}
}
