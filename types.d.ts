// Table Column Types
interface Column {
  headerName: string;
  property: string;
  valueGetter?: (row: any) => any;
  cell?: (value, row: any) => ReactNode;
}

// Type of the Mock Data
interface ReportsList {
  timestamp: Date;
  name: string;
  email: string;
  type: string;
  score: RiskScore;
  status: string;
}

interface PieSlice {
  label: string;
  color: string;
}

// Types for the API Items array
interface IdVerification {
  dynamic: boolean;
  sendDocument: boolean;
  sendDocumentBackside: boolean;
  sendSelfieWithDocument: boolean;
}

interface Overrides {
  required: any[];
}

interface Attribute {
  addedByUser: boolean;
  description: string;
  idVerification: IdVerification;
  isAdditional: boolean;
  label: string;
  optional: boolean;
  overrides: Overrides;
  schemaId: string;
  valid: boolean;
  value: string | object | null;
  weight: number;
  _id: string;
}

interface Options {
  askForMemberOwnership: boolean;
  datazooEnabled: boolean;
  idDocVerVendor: string;
  idScanFlowStrictness: string;
  idScanFlowTriesLimit: number;
  idScanFlowType: string;
  idScanShowPhotoUploadOption: boolean;
  idScanShowSelfieUploadOption: boolean;
  membersEnabled: boolean;
}

interface Owner {
  _id: string;
  email: string;
  name: string;
}

interface RiskScoring {
  outOfDate: boolean;
  currentCategory?: "high" | "medium" | "low";
  statusMessage?: any;
  statusMetadata?: any;
  results: any[];
}

interface Section {
  components: string[];
  description: string;
  title: string;
  _id: string;
}

interface Monitoring {
  defaultInterval: any;
  highRiskInterval: any;
  lowRiskInterval: any;
  mediumRiskInterval: any;
}

interface SybilChecks {
  attributeEnabled: boolean;
  mrzEnabled: boolean;
  onePerApplicant: boolean;
}

interface DataChecksOptions {
  dataset: string;
  enabled: boolean;
}

interface ComplyAdvantage {
  enabled: boolean;
  ignoreNationalities: any[];
  fuzziness: number;
  extraParams: string[];
}

interface Scraper {
  enabled: boolean;
  ignoreNationalities: any[];
  extraParams: string[];
}

interface DataChecks {
  BrexIO: DataChecksOptions;
  ComplyAdvantage: ComplyAdvantage;
  Scraper: Scraper;
}

interface RequirementsOptions {
  askForMemberOwnership: boolean;
  datazooEnabled: boolean;
  generateEncryptedCredential: boolean;
  idDocVerVendor: string;
  idDocDocumentSupportCategory: string;
  idScanFlowStrictness: string;
  idScanFlowTries: number;
  similarityThreshold: number;
  passiveLivenessThreshold: number;
  idScanFlowType: string;
  idScanShowPhotoUploadOption: boolean;
  idScanShowSelfieUploadOption: boolean;
  membersEnabled: boolean;
  monitoring: Monitoring;
  signUpMethodEmail: boolean;
  signUpMethodWallet: boolean;
  sybilChecks: SybilChecks;
  dataChecks: DataChecks;
  backsideScanning: boolean;
}

interface JsonSchema {
  description: string;
  title: string;
}

interface Question {
  jsonSchema: JsonSchema;
  optional: boolean;
  schemaId: string;
  uiType: string;
  weight: number;
  _id: string;
}

interface Requirement {
  options: RequirementsOptions;
  forms: any[];
  questions: Question[];
  uploads: any[];
}

interface TemplateHistory {
  event: string;
  user: string;
  _id: string;
  timestamp: string;
}

interface MemberTemplate {
  isDefault: boolean;
  memberLegalEntityTypes: any[];
  legalEntityTypes: any[];
  memberRoles: string[];
  memberType: string;
  template: any;
  _id: string;
}

interface WelcomeScreen {
  disclaimerText: string;
  enabled: boolean;
}

interface ReviewDecision {
  statusCode: number;
  scope: string;
  required: number;
  _id: string;
}

interface Template {
  _id: string;
  active: boolean;
  allowDynamicAttributes: boolean;
  defaultManager: any;
  description: string;
  isSignUpTemplate: boolean;
  name: string;
  removed: boolean;
  requirements: Requirement;
  scope: string;
  type: string;
  welcomeScreen: WelcomeScreen;
  reviewDecisions: ReviewDecision[];
  history: TemplateHistory[];
  legalLinks: any[];
  memberTemplates: MemberTemplate[];
  sections: Section[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  submission: {
    documentTemplate: any;
  };
  scoreCard: string;
}

interface StatusLog {
  _id: string;
  code: number;
  metaData?: any;
  scope: string;
  user: string;
  note?: any;
  userType?: string;
  timestamp: string;
  __v: number;
}

interface Item {
  attachments: any[];
  attributes: Record<string, Attribute>;
  dataChecks: any[];
  documentOrders: any[];
  datazooChecks: any[];
  forms: any[];
  idScanFlowTries: number;
  labels: any[];
  managers: any[];
  memberTemplates: any[];
  notes: any[];
  options: Options;
  owners: Owner[];
  payments: any[];
  questions: Record<string, any>;
  riskScoring: RiskScoring;
  sections: Section[];
  template: Template;
  type: string;
  walletScreenings: any[];
  idVerificationChecks: any[];
  members: any[];
  statusLog: StatusLog[];
  currentStatus: number;
  createdAt: string;
  updatedAt: string;
  id: string;
  statusName: string;
}

interface ApiResponse {
  items: Item[];
  total: number;
}
