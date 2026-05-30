import {
	ICredentialType,
	ICredentialTestRequest,
	ICredentialProperty,
} from 'n8n-workflow';

export class McpOutreachEngineApi implements ICredentialType {
	name = 'mcpOutreachEngineApi';
	displayName = 'MCP Outreach Engine API';
	documentationUrl = 'https://github.com/developers-universe-1/agentic-outreach-engine';
	properties: ICredentialProperty[] = [
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'http://localhost:3000',
			placeholder: 'http://localhost:3000',
			description: 'Base URL of the MCP Outreach Engine server',
		},
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			description: 'Optional API key if authentication is enabled',
		},
	];

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{ $credentials.baseUrl }}',
			url: '/api/outreach',
			method: 'GET',
		},
	};
}
