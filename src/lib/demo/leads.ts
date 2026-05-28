export interface Lead {
  id: string;
  name: string;
  title: string;
  company: string;
  industry: string;
  companySize: string;
  email: string;
  linkedInUrl: string;
  icpScore: number;
  enrichmentStatus: 'enriched' | 'pending' | 'unenriched';
  assignedSequence: string;
  sequenceStep: number;
  lastActivity: string;
  channel: 'Email' | 'LinkedIn' | 'Cold Call';
}

export const leads: Lead[] = [
  { id: 'lead-001', name: 'James Wilson', title: 'VP Sales', company: 'TechCorp', industry: 'SaaS', companySize: '200-500', email: 'j.wilson@techcorp.com', linkedInUrl: 'linkedin.com/in/jwilson', icpScore: 94, enrichmentStatus: 'enriched', assignedSequence: 'seq-001', sequenceStep: 2, lastActivity: '2h ago', channel: 'Email' },
  { id: 'lead-002', name: 'Sarah Chen', title: 'Head of Revenue', company: 'ScaleUp Inc', industry: 'Fintech', companySize: '50-200', email: 's.chen@scaleup.io', linkedInUrl: 'linkedin.com/in/schen', icpScore: 91, enrichmentStatus: 'enriched', assignedSequence: 'seq-002', sequenceStep: 1, lastActivity: '5h ago', channel: 'LinkedIn' },
  { id: 'lead-003', name: 'Michael Torres', title: 'CRO', company: 'GrowthLabs', industry: 'MarTech', companySize: '500-1000', email: 'm.torres@growthlabs.com', linkedInUrl: 'linkedin.com/in/mtorres', icpScore: 88, enrichmentStatus: 'enriched', assignedSequence: 'seq-001', sequenceStep: 3, lastActivity: '1d ago', channel: 'Email' },
  { id: 'lead-004', name: 'Emily Park', title: 'Sales Director', company: 'DataFlow', industry: 'SaaS', companySize: '200-500', email: 'e.park@dataflow.co', linkedInUrl: 'linkedin.com/in/epark', icpScore: 85, enrichmentStatus: 'pending', assignedSequence: 'seq-004', sequenceStep: 1, lastActivity: '3h ago', channel: 'LinkedIn' },
  { id: 'lead-005', name: 'David Kim', title: 'VP Revenue', company: 'CloudNine', industry: 'Cloud', companySize: '1000+', email: 'd.kim@cloudnine.io', linkedInUrl: 'linkedin.com/in/dkim', icpScore: 82, enrichmentStatus: 'enriched', assignedSequence: 'seq-001', sequenceStep: 1, lastActivity: '6h ago', channel: 'Email' },
  { id: 'lead-006', name: 'Lisa Thompson', title: 'Sales Manager', company: 'FastTrack', industry: 'Fintech', companySize: '50-200', email: 'l.thompson@fasttrack.com', linkedInUrl: 'linkedin.com/in/lthompson', icpScore: 79, enrichmentStatus: 'enriched', assignedSequence: 'seq-003', sequenceStep: 2, lastActivity: '12h ago', channel: 'Cold Call' },
  { id: 'lead-007', name: 'Robert Martinez', title: 'Director of GTM', company: 'PivotAI', industry: 'AI/ML', companySize: '50-200', email: 'r.martinez@pivotai.com', linkedInUrl: 'linkedin.com/in/rmartinez', icpScore: 76, enrichmentStatus: 'pending', assignedSequence: 'seq-002', sequenceStep: 2, lastActivity: '1d ago', channel: 'LinkedIn' },
  { id: 'lead-008', name: 'Amanda Foster', title: 'VP Growth', company: 'NexusDB', industry: 'Data', companySize: '200-500', email: 'a.foster@nexusdb.io', linkedInUrl: 'linkedin.com/in/afoster', icpScore: 73, enrichmentStatus: 'unenriched', assignedSequence: 'seq-001', sequenceStep: 4, lastActivity: '2d ago', channel: 'Email' },
  { id: 'lead-009', name: 'Chris Johnson', title: 'Head of Sales', company: 'BuildRight', industry: 'PropTech', companySize: '50-200', email: 'c.johnson@buildright.co', linkedInUrl: 'linkedin.com/in/cjohnson', icpScore: 68, enrichmentStatus: 'enriched', assignedSequence: 'seq-003', sequenceStep: 1, lastActivity: '4h ago', channel: 'Cold Call' },
  { id: 'lead-010', name: 'Jessica Lee', title: 'Revenue Ops', company: 'SyncLab', industry: 'SaaS', companySize: '200-500', email: 'j.lee@synclab.com', linkedInUrl: 'linkedin.com/in/jlee', icpScore: 64, enrichmentStatus: 'pending', assignedSequence: 'seq-004', sequenceStep: 2, lastActivity: '1d ago', channel: 'LinkedIn' },
  { id: 'lead-011', name: 'Mark Anderson', title: 'Sales Director', company: 'Finova', industry: 'Fintech', companySize: '1000+', email: 'm.anderson@finova.io', linkedInUrl: 'linkedin.com/in/manderson', icpScore: 58, enrichmentStatus: 'unenriched', assignedSequence: 'seq-002', sequenceStep: 3, lastActivity: '3d ago', channel: 'LinkedIn' },
  { id: 'lead-012', name: 'Rachel Green', title: 'VP Marketing', company: 'Brandly', industry: 'MarTech', companySize: '50-200', email: 'r.green@brandly.co', linkedInUrl: 'linkedin.com/in/rgreen', icpScore: 52, enrichmentStatus: 'unenriched', assignedSequence: 'seq-001', sequenceStep: 1, lastActivity: '5d ago', channel: 'Email' }
];
