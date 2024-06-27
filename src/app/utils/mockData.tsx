// Different Risk Scores
enum RiskScore {
  Low = 0,
  Medium = 1,
  High = 2,
}

export const data: ReportsList[] = [
  {
    timestamp: new Date("2024-06-20T03:24:00"),
    name: "Test Name",
    email: "test@123.com",
    type: "AI Scan",
    score: RiskScore.Low,
    status: "Approved",
  },
  {
    timestamp: new Date("2024-06-20T03:24:00"),
    name: "Test Name",
    email: "test@123.com",
    type: "AI Scan",
    score: RiskScore.Low,
    status: "Approved",
  },
  {
    timestamp: new Date("2024-06-20T03:24:00"),
    name: "Test Name",
    email: "test@123.com",
    type: "AI Scan",
    score: RiskScore.Low,
    status: "Approved",
  },
  {
    timestamp: new Date("2024-06-20T03:24:00"),
    name: "Test Name",
    email: "test@123.com",
    type: "AI Scan",
    score: RiskScore.Low,
    status: "Approved",
  },
  {
    timestamp: new Date("2024-06-20T03:24:00"),
    name: "Test Name",
    email: "test@123.com",
    type: "AI Scan",
    score: RiskScore.Low,
    status: "Approved",
  },
  {
    timestamp: new Date("2024-06-20T03:24:00"),
    name: "Test Name",
    email: "test@123.com",
    type: "AI Scan",
    score: RiskScore.Low,
    status: "Approved",
  },
  {
    timestamp: new Date("2024-06-20T03:24:00"),
    name: "Test Name",
    email: "test@123.com",
    type: "AI Scan",
    score: RiskScore.Low,
    status: "Approved",
  },
  {
    timestamp: new Date("2024-06-20T03:24:00"),
    name: "Test Name",
    email: "test@123.com",
    type: "AI Scan",
    score: RiskScore.Low,
    status: "Approved",
  },
  {
    timestamp: new Date("2024-06-20T03:24:00"),
    name: "Test Name",
    email: "test@123.com",
    type: "AI Scan",
    score: RiskScore.Low,
    status: "Approved",
  },
];

export const pieData = {
  approved: 11,
  rejected: 1,
  cancelled: 3,
  ready: 4,
  review: 15,
};

export const apiData: ApiResponse = {
  items: [
    {
      attachments: [],
      attributes: {
        "667ac85c979c90daff391879": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "Email",
          optional: false,
          overrides: {
            required: [],
          },
          schemaId: "http://platform.selfkey.org/schema/attribute/email.json",
          valid: true,
          value: "charlie+example5@kyc-chain.com",
          weight: 0,
          _id: "667acae89f4079752cdd604b",
        },
        "667ac85c979c90daff39187a": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "First name",
          optional: false,
          overrides: {
            required: [],
          },
          schemaId:
            "http://platform.selfkey.org/schema/attribute/first-name.json",
          valid: true,
          value: "Dominic",
          weight: 0,
          _id: "667acae89f4079752cdd604c",
        },
        "667ac85c979c90daff39187b": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "Middle name",
          optional: true,
          overrides: {
            required: [],
          },
          schemaId:
            "http://platform.selfkey.org/schema/attribute/middle-name.json",
          valid: true,
          value: "",
          weight: 0,
          _id: "667acae89f4079752cdd604d",
        },
        "667ac85c979c90daff39187c": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "Last name",
          optional: false,
          overrides: {
            required: [],
          },
          schemaId:
            "http://platform.selfkey.org/schema/attribute/last-name.json",
          valid: true,
          value: "Rendone",
          weight: 0,
          _id: "667acae89f4079752cdd604e",
        },
        "667ac85c979c90daff39187d": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "Date of birth",
          optional: false,
          overrides: {
            required: [],
          },
          schemaId:
            "http://platform.selfkey.org/schema/attribute/date-of-birth.json",
          valid: true,
          value: null,
          weight: 0,
          _id: "667acae89f4079752cdd604f",
        },
        "667ac85c979c90daff39187e": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "Nationality",
          optional: false,
          overrides: {
            required: [],
          },
          schemaId:
            "http://platform.selfkey.org/schema/attribute/nationality.json",
          valid: true,
          value: null,
          weight: 0,
          _id: "667acae89f4079752cdd6050",
        },
        "667ac85c979c90daff39187f": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "Country of residency",
          optional: false,
          overrides: {
            required: [],
          },
          schemaId:
            "http://platform.selfkey.org/schema/attribute/country-of-residency.json",
          valid: true,
          value: null,
          weight: 0,
          _id: "667acae89f4079752cdd6051",
        },
      },
      dataChecks: [],
      documentOrders: [],
      datazooChecks: [],
      forms: [],
      idScanFlowTries: 0,
      labels: [],
      managers: [],
      memberTemplates: [],
      notes: [],
      options: {
        askForMemberOwnership: false,
        datazooEnabled: false,
        idDocVerVendor: "AIScan",
        idScanFlowStrictness: "non_strict",
        idScanFlowTriesLimit: 3,
        idScanFlowType: "disabled",
        idScanShowPhotoUploadOption: true,
        idScanShowSelfieUploadOption: false,
        membersEnabled: false,
      },
      owners: [
        {
          _id: "667acae89f4079752cdd6045",
          email: "charlie+example5@kyc-chain.com",
          name: "Dominic Rendone",
        },
      ],
      payments: [],
      questions: {},
      riskScoring: {
        outOfDate: false,
        results: [],
      },
      sections: [
        {
          components: ["SharesRegistry"],
          description: "",
          title: "",
          _id: "667ac85c979c90daff391880",
        },
      ],
      template: {
        _id: "667ac85c979c90daff391877",
        active: true,
        allowDynamicAttributes: false,
        defaultManager: null,
        description: "A sample set of KYC requirements",
        isSignUpTemplate: false,
        name: "Example Template",
        removed: false,
        requirements: {
          options: {
            askForMemberOwnership: false,
            datazooEnabled: false,
            generateEncryptedCredential: false,
            idDocVerVendor: "AIScan",
            idDocDocumentSupportCategory: "LIMITED",
            idScanFlowStrictness: "non_strict",
            idScanFlowTries: 3,
            similarityThreshold: 0.5,
            passiveLivenessThreshold: 0.6,
            idScanFlowType: "disabled",
            idScanShowPhotoUploadOption: true,
            idScanShowSelfieUploadOption: false,
            membersEnabled: false,
            monitoring: {
              defaultInterval: null,
              highRiskInterval: null,
              lowRiskInterval: null,
              mediumRiskInterval: null,
            },
            signUpMethodEmail: true,
            signUpMethodWallet: false,
            sybilChecks: {
              attributeEnabled: true,
              mrzEnabled: true,
              onePerApplicant: true,
            },
            dataChecks: {
              BrexIO: {
                dataset: "super",
                enabled: false,
              },
              ComplyAdvantage: {
                enabled: false,
                ignoreNationalities: [{}],
                fuzziness: 0.5,
                extraParams: [
                  "http://platform.selfkey.org/schema/attribute/nationality.json",
                  "http://platform.selfkey.org/schema/attribute/date-of-birth.json",
                  "http://platform.selfkey.org/schema/attribute/country-of-residency.json",
                ],
              },
              Scraper: {
                enabled: false,
                ignoreNationalities: [{}],
                extraParams: [
                  "http://platform.selfkey.org/schema/attribute/nationality.json",
                  "http://platform.selfkey.org/schema/attribute/date-of-birth.json",
                  "http://platform.selfkey.org/schema/attribute/country-of-residency.json",
                ],
              },
            },
            backsideScanning: false,
          },
          forms: [],
          questions: [
            {
              jsonSchema: {
                description: "",
                title: "Email",
              },
              optional: false,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/email.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff391879",
            },
            {
              jsonSchema: {
                description: "",
                title: "First name",
              },
              optional: false,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/first-name.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff39187a",
            },
            {
              jsonSchema: {
                description: "",
                title: "Middle name",
              },
              optional: true,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/middle-name.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff39187b",
            },
            {
              jsonSchema: {
                description: "",
                title: "Last name",
              },
              optional: false,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/last-name.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff39187c",
            },
            {
              jsonSchema: {
                description: "",
                title: "Date of birth",
              },
              optional: false,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/date-of-birth.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff39187d",
            },
            {
              jsonSchema: {
                description: "",
                title: "Nationality",
              },
              optional: false,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/nationality.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff39187e",
            },
            {
              jsonSchema: {
                description: "",
                title: "Country of residency",
              },
              optional: false,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/country-of-residency.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff39187f",
            },
          ],
          uploads: [],
        },
        scope: "667ac4a1979c90daff3863ca",
        type: "individual",
        welcomeScreen: {
          disclaimerText: "",
          enabled: false,
        },
        reviewDecisions: [
          {
            statusCode: 2,
            scope: "667ac4a1979c90daff3863ca",
            required: 1,
            _id: "667ac8c3979c90daff3928d0",
          },
        ],
        history: [
          {
            event: "create",
            user: "6511268bd8253a4c96742da0",
            _id: "667ac85c979c90daff391884",
            timestamp: "2024-06-25T13:38:36.250Z",
          },
          {
            event: "edit",
            user: "6511268bd8253a4c96742da0",
            _id: "667ac86c9f4079752cdd1b3c",
            timestamp: "2024-06-25T13:38:52.393Z",
          },
          {
            event: "edit",
            user: "6511268bd8253a4c96742da0",
            _id: "667ac8c3979c90daff3928d1",
            timestamp: "2024-06-25T13:40:19.854Z",
          },
        ],
        legalLinks: [],
        memberTemplates: [
          {
            isDefault: true,
            memberLegalEntityTypes: [],
            legalEntityTypes: [],
            memberRoles: [
              "director_ltd",
              "shareholder",
              "ubo",
              "observer",
              "authorizedSignatory",
              "other",
              "manager",
              "member_llc",
              "other_llc",
              "grantor",
              "beneficiary_tst",
              "trustee",
              "protector",
              "founder",
              "director_fnd",
              "supervisor",
              "beneficiary_fnd",
              "generalPartner",
              "limitedPartner",
              "member",
            ],
            memberType: "individual",
            template: null,
            _id: "667ac85c979c90daff391881",
          },
        ],
        sections: [
          {
            components: ["SharesRegistry"],
            description: "",
            title: "",
            _id: "667ac85c979c90daff391880",
          },
        ],
        createdAt: "2024-06-25T13:38:36.223Z",
        updatedAt: "2024-06-25T13:40:19.859Z",
        __v: 3,
        submission: {
          documentTemplate: null,
        },
        scoreCard: "667ac8811a7aae9389f1390a",
      },
      type: "individual",
      walletScreenings: [],
      idVerificationChecks: [],
      members: [],
      statusLog: [
        {
          _id: "667acae89f4079752cdd6052",
          code: 5,
          metaData: null,
          scope: "667ac4a1979c90daff3863ca",
          user: "6511268bd8253a4c96742da0",
          userType: "manager",
          timestamp: "2024-06-25T13:49:28.433Z",
          __v: 0,
        },
      ],
      currentStatus: 5,
      createdAt: "2024-06-25T13:49:28.461Z",
      updatedAt: "2024-06-25T13:49:28.461Z",
      id: "667acae89f4079752cdd6048",
      statusName: "In Progress",
    },
    {
      attachments: [],
      attributes: {
        "667ac85c979c90daff391879": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "Email",
          optional: false,
          overrides: {
            required: [],
          },
          schemaId: "http://platform.selfkey.org/schema/attribute/email.json",
          valid: true,
          value: "charlie+example4@kyc-chain.com",
          weight: 0,
          _id: "667acaa61a7aae9389f17894",
        },
        "667ac85c979c90daff39187a": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "First name",
          optional: false,
          overrides: {
            required: [],
          },
          schemaId:
            "http://platform.selfkey.org/schema/attribute/first-name.json",
          valid: true,
          value: "Midge",
          weight: 0,
          _id: "667acaa61a7aae9389f17895",
        },
        "667ac85c979c90daff39187b": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "Middle name",
          optional: true,
          overrides: {
            required: [],
          },
          schemaId:
            "http://platform.selfkey.org/schema/attribute/middle-name.json",
          valid: true,
          value: "",
          weight: 0,
          _id: "667acaa61a7aae9389f17896",
        },
        "667ac85c979c90daff39187c": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "Last name",
          optional: false,
          overrides: {
            required: [],
          },
          schemaId:
            "http://platform.selfkey.org/schema/attribute/last-name.json",
          valid: true,
          value: "Kelmer",
          weight: 0,
          _id: "667acaa61a7aae9389f17897",
        },
        "667ac85c979c90daff39187d": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "Date of birth",
          optional: false,
          overrides: {
            required: [],
          },
          schemaId:
            "http://platform.selfkey.org/schema/attribute/date-of-birth.json",
          valid: true,
          value: "1950-03-01",
          weight: 0,
          _id: "667acaa61a7aae9389f17898",
        },
        "667ac85c979c90daff39187e": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "Nationality",
          optional: false,
          overrides: {
            required: [],
          },
          schemaId:
            "http://platform.selfkey.org/schema/attribute/nationality.json",
          valid: true,
          value: {
            country: "TH",
          },
          weight: 0,
          _id: "667acaa61a7aae9389f17899",
        },
        "667ac85c979c90daff39187f": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "Country of residency",
          optional: false,
          overrides: {
            required: [],
          },
          schemaId:
            "http://platform.selfkey.org/schema/attribute/country-of-residency.json",
          valid: true,
          value: {
            country: "CH",
          },
          weight: 0,
          _id: "667acaa61a7aae9389f1789a",
        },
      },
      dataChecks: [],
      documentOrders: [],
      datazooChecks: [],
      forms: [],
      idScanFlowTries: 0,
      labels: [],
      managers: [],
      memberTemplates: [],
      notes: [],
      options: {
        askForMemberOwnership: false,
        datazooEnabled: false,
        idDocVerVendor: "AIScan",
        idScanFlowStrictness: "non_strict",
        idScanFlowTriesLimit: 3,
        idScanFlowType: "disabled",
        idScanShowPhotoUploadOption: true,
        idScanShowSelfieUploadOption: false,
        membersEnabled: false,
      },
      owners: [
        {
          _id: "667acaa61a7aae9389f1788d",
          email: "charlie+example4@kyc-chain.com",
          name: "Midge Kelmer",
        },
      ],
      payments: [],
      questions: {},
      riskScoring: {
        outOfDate: false,
        results: [],
      },
      sections: [
        {
          components: ["SharesRegistry"],
          description: "",
          title: "",
          _id: "667ac85c979c90daff391880",
        },
      ],
      template: {
        _id: "667ac85c979c90daff391877",
        active: true,
        allowDynamicAttributes: false,
        defaultManager: null,
        description: "A sample set of KYC requirements",
        isSignUpTemplate: false,
        name: "Example Template",
        removed: false,
        requirements: {
          options: {
            askForMemberOwnership: false,
            datazooEnabled: false,
            generateEncryptedCredential: false,
            idDocVerVendor: "AIScan",
            idDocDocumentSupportCategory: "LIMITED",
            idScanFlowStrictness: "non_strict",
            idScanFlowTries: 3,
            similarityThreshold: 0.5,
            passiveLivenessThreshold: 0.6,
            idScanFlowType: "disabled",
            idScanShowPhotoUploadOption: true,
            idScanShowSelfieUploadOption: false,
            membersEnabled: false,
            monitoring: {
              defaultInterval: null,
              highRiskInterval: null,
              lowRiskInterval: null,
              mediumRiskInterval: null,
            },
            signUpMethodEmail: true,
            signUpMethodWallet: false,
            sybilChecks: {
              attributeEnabled: true,
              mrzEnabled: true,
              onePerApplicant: true,
            },
            dataChecks: {
              BrexIO: {
                dataset: "super",
                enabled: false,
              },
              ComplyAdvantage: {
                enabled: false,
                ignoreNationalities: [{}],
                fuzziness: 0.5,
                extraParams: [
                  "http://platform.selfkey.org/schema/attribute/nationality.json",
                  "http://platform.selfkey.org/schema/attribute/date-of-birth.json",
                  "http://platform.selfkey.org/schema/attribute/country-of-residency.json",
                ],
              },
              Scraper: {
                enabled: false,
                ignoreNationalities: [{}],
                extraParams: [
                  "http://platform.selfkey.org/schema/attribute/nationality.json",
                  "http://platform.selfkey.org/schema/attribute/date-of-birth.json",
                  "http://platform.selfkey.org/schema/attribute/country-of-residency.json",
                ],
              },
            },
            backsideScanning: false,
          },
          forms: [],
          questions: [
            {
              jsonSchema: {
                description: "",
                title: "Email",
              },
              optional: false,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/email.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff391879",
            },
            {
              jsonSchema: {
                description: "",
                title: "First name",
              },
              optional: false,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/first-name.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff39187a",
            },
            {
              jsonSchema: {
                description: "",
                title: "Middle name",
              },
              optional: true,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/middle-name.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff39187b",
            },
            {
              jsonSchema: {
                description: "",
                title: "Last name",
              },
              optional: false,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/last-name.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff39187c",
            },
            {
              jsonSchema: {
                description: "",
                title: "Date of birth",
              },
              optional: false,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/date-of-birth.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff39187d",
            },
            {
              jsonSchema: {
                description: "",
                title: "Nationality",
              },
              optional: false,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/nationality.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff39187e",
            },
            {
              jsonSchema: {
                description: "",
                title: "Country of residency",
              },
              optional: false,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/country-of-residency.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff39187f",
            },
          ],
          uploads: [],
        },
        scope: "667ac4a1979c90daff3863ca",
        type: "individual",
        welcomeScreen: {
          disclaimerText: "",
          enabled: false,
        },
        reviewDecisions: [
          {
            statusCode: 2,
            scope: "667ac4a1979c90daff3863ca",
            required: 1,
            _id: "667ac8c3979c90daff3928d0",
          },
        ],
        history: [
          {
            event: "create",
            user: "6511268bd8253a4c96742da0",
            _id: "667ac85c979c90daff391884",
            timestamp: "2024-06-25T13:38:36.250Z",
          },
          {
            event: "edit",
            user: "6511268bd8253a4c96742da0",
            _id: "667ac86c9f4079752cdd1b3c",
            timestamp: "2024-06-25T13:38:52.393Z",
          },
          {
            event: "edit",
            user: "6511268bd8253a4c96742da0",
            _id: "667ac8c3979c90daff3928d1",
            timestamp: "2024-06-25T13:40:19.854Z",
          },
        ],
        legalLinks: [],
        memberTemplates: [
          {
            isDefault: true,
            memberLegalEntityTypes: [],
            legalEntityTypes: [],
            memberRoles: [
              "director_ltd",
              "shareholder",
              "ubo",
              "observer",
              "authorizedSignatory",
              "other",
              "manager",
              "member_llc",
              "other_llc",
              "grantor",
              "beneficiary_tst",
              "trustee",
              "protector",
              "founder",
              "director_fnd",
              "supervisor",
              "beneficiary_fnd",
              "generalPartner",
              "limitedPartner",
              "member",
            ],
            memberType: "individual",
            template: null,
            _id: "667ac85c979c90daff391881",
          },
        ],
        sections: [
          {
            components: ["SharesRegistry"],
            description: "",
            title: "",
            _id: "667ac85c979c90daff391880",
          },
        ],
        createdAt: "2024-06-25T13:38:36.223Z",
        updatedAt: "2024-06-25T13:40:19.859Z",
        __v: 3,
        submission: {
          documentTemplate: null,
        },
        scoreCard: "667ac8811a7aae9389f1390a",
      },
      type: "individual",
      walletScreenings: [],
      idVerificationChecks: [],
      members: [],
      statusLog: [
        {
          _id: "667acaa61a7aae9389f1789b",
          code: 5,
          metaData: null,
          scope: "667ac4a1979c90daff3863ca",
          user: "6511268bd8253a4c96742da0",
          userType: "manager",
          timestamp: "2024-06-25T13:48:22.701Z",
          __v: 0,
        },
        {
          _id: "667bbda69f4079752cf4bbc9",
          code: 6,
          metaData: {
            client: {
              city: null,
              country: null,
              ip: "172.16.0.12",
              userAgentParsed: {
                ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                browser: {
                  name: "Chrome",
                  version: "126.0.0.0",
                  major: "126",
                },
                engine: {
                  name: "Blink",
                  version: "126.0.0.0",
                },
                os: {
                  name: "Mac OS",
                  version: "10.15.7",
                },
                device: {
                  vendor: "Apple",
                  model: "Macintosh",
                },
              },
            },
          },
          scope: "667ac4a1979c90daff3863ca",
          user: "667acaa61a7aae9389f1788d",
          timestamp: "2024-06-26T07:05:10.093Z",
          __v: 0,
        },
        {
          _id: "667bbdcd9f4079752cf4c012",
          code: 11,
          metaData: {
            client: {
              city: null,
              country: null,
              ip: "172.16.0.12",
              userAgentParsed: {
                ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                browser: {
                  name: "Chrome",
                  version: "126.0.0.0",
                  major: "126",
                },
                engine: {
                  name: "Blink",
                  version: "126.0.0.0",
                },
                os: {
                  name: "Mac OS",
                  version: "10.15.7",
                },
                device: {
                  vendor: "Apple",
                  model: "Macintosh",
                },
              },
            },
            attributes: [
              {
                id: "667ac85c979c90daff39187d",
                data: "1950-03-01",
                schemaId:
                  "http://platform.selfkey.org/schema/attribute/date-of-birth.json",
                previousData: null,
              },
            ],
            questions: [],
            forms: [],
          },
          scope: "667ac4a1979c90daff3863ca",
          user: "667acaa61a7aae9389f1788d",
          userType: "applicant",
          timestamp: "2024-06-26T07:05:49.891Z",
          __v: 0,
        },
        {
          _id: "667bbe759f4079752cf4d0b3",
          code: 11,
          metaData: {
            client: {
              city: null,
              country: null,
              ip: "172.16.0.28",
              userAgentParsed: {
                ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                browser: {
                  name: "Chrome",
                  version: "126.0.0.0",
                  major: "126",
                },
                engine: {
                  name: "Blink",
                  version: "126.0.0.0",
                },
                os: {
                  name: "Mac OS",
                  version: "10.15.7",
                },
                device: {
                  vendor: "Apple",
                  model: "Macintosh",
                },
              },
            },
            attributes: [
              {
                id: "667ac85c979c90daff39187e",
                data: {
                  country: "TH",
                },
                schemaId:
                  "http://platform.selfkey.org/schema/attribute/nationality.json",
                previousData: null,
              },
              {
                id: "667ac85c979c90daff39187f",
                data: {
                  country: "CH",
                },
                schemaId:
                  "http://platform.selfkey.org/schema/attribute/country-of-residency.json",
                previousData: null,
              },
            ],
            questions: [],
            forms: [],
          },
          scope: "667ac4a1979c90daff3863ca",
          user: "667acaa61a7aae9389f1788d",
          userType: "applicant",
          timestamp: "2024-06-26T07:08:37.742Z",
          __v: 0,
        },
      ],
      currentStatus: 11,
      createdAt: "2024-06-25T13:48:22.720Z",
      updatedAt: "2024-06-26T07:08:37.757Z",
      id: "667acaa61a7aae9389f17891",
      statusName: "In Progress",
    },
    {
      attachments: [],
      attributes: {
        "667ac85c979c90daff391879": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "Email",
          optional: false,
          overrides: {
            required: [],
          },
          schemaId: "http://platform.selfkey.org/schema/attribute/email.json",
          valid: true,
          value: "charlie+example3@kyc-chain.com",
          weight: 0,
          _id: "667aca711a7aae9389f17253",
        },
        "667ac85c979c90daff39187a": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "First name",
          optional: false,
          overrides: {
            required: [],
          },
          schemaId:
            "http://platform.selfkey.org/schema/attribute/first-name.json",
          valid: true,
          value: "Diego",
          weight: 0,
          _id: "667aca711a7aae9389f17254",
        },
        "667ac85c979c90daff39187b": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "Middle name",
          optional: true,
          overrides: {
            required: [],
          },
          schemaId:
            "http://platform.selfkey.org/schema/attribute/middle-name.json",
          valid: true,
          value: "",
          weight: 0,
          _id: "667aca711a7aae9389f17255",
        },
        "667ac85c979c90daff39187c": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "Last name",
          optional: false,
          overrides: {
            required: [],
          },
          schemaId:
            "http://platform.selfkey.org/schema/attribute/last-name.json",
          valid: true,
          value: "Marquez",
          weight: 0,
          _id: "667aca711a7aae9389f17256",
        },
        "667ac85c979c90daff39187d": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "Date of birth",
          optional: false,
          overrides: {
            required: [],
          },
          schemaId:
            "http://platform.selfkey.org/schema/attribute/date-of-birth.json",
          valid: true,
          value: "1988-11-15",
          weight: 0,
          _id: "667aca711a7aae9389f17257",
        },
        "667ac85c979c90daff39187e": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "Nationality",
          optional: false,
          overrides: {
            required: [],
          },
          schemaId:
            "http://platform.selfkey.org/schema/attribute/nationality.json",
          valid: true,
          value: {
            country: "KP",
          },
          weight: 0,
          _id: "667aca711a7aae9389f17258",
        },
        "667ac85c979c90daff39187f": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "Country of residency",
          optional: false,
          overrides: {
            required: [],
          },
          schemaId:
            "http://platform.selfkey.org/schema/attribute/country-of-residency.json",
          valid: true,
          value: {
            country: "KP",
          },
          weight: 0,
          _id: "667aca711a7aae9389f17259",
        },
      },
      dataChecks: [],
      documentOrders: [],
      datazooChecks: [],
      forms: [],
      idScanFlowTries: 0,
      labels: [],
      managers: [
        {
          role: "manager",
          user: "6511268bd8253a4c96742da0",
          _id: "667bbd85979c90daff512fcf",
        },
      ],
      memberTemplates: [],
      notes: [],
      options: {
        askForMemberOwnership: false,
        datazooEnabled: false,
        idDocVerVendor: "AIScan",
        idScanFlowStrictness: "non_strict",
        idScanFlowTriesLimit: 3,
        idScanFlowType: "disabled",
        idScanShowPhotoUploadOption: true,
        idScanShowSelfieUploadOption: false,
        membersEnabled: false,
      },
      owners: [
        {
          _id: "667aca711a7aae9389f1724d",
          email: "charlie+example3@kyc-chain.com",
          name: "Diego Marquez",
        },
      ],
      payments: [],
      questions: {},
      riskScoring: {
        outOfDate: false,
        results: [
          {
            calculation: {
              age: {
                score: 0,
                value: "1988-11-15",
                weight: 0.3,
              },
              nationality: {
                score: 100,
                value: {
                  country: "KP",
                  countryScore: "21.8",
                },
                weight: 0.35,
              },
              residency: {
                score: 100,
                value: {
                  country: "KP",
                  countryScore: "21.8",
                },
                weight: 0.35,
              },
            },
            category: "medium",
            notes: [],
            owner: null,
            scoreCard: "667ac8811a7aae9389f1390a",
            timestamp: "2024-06-26T06:59:27.674Z",
            total: 70,
            _id: "667bbc4f9f4079752cf48ecc",
          },
          {
            calculation: {
              age: {
                score: 0,
                value: "1988-11-15",
                weight: 0.3,
              },
              nationality: {
                score: 100,
                value: {
                  country: "KP",
                  countryScore: "21.8",
                },
                weight: 0.35,
              },
              residency: {
                score: 100,
                value: {
                  country: "KP",
                  countryScore: "21.8",
                },
                weight: 0.35,
              },
            },
            category: "high",
            notes: [],
            owner: null,
            scoreCard: "667ac8811a7aae9389f1390a",
            timestamp: "2024-06-26T07:03:50.046Z",
            total: 70,
            _id: "667bbd56979c90daff5128b6",
          },
        ],
        currentCategory: "high",
        statusMessage: null,
        statusMetadata: null,
      },
      sections: [
        {
          components: ["SharesRegistry"],
          description: "",
          title: "",
          _id: "667ac85c979c90daff391880",
        },
      ],
      template: {
        _id: "667ac85c979c90daff391877",
        active: true,
        allowDynamicAttributes: false,
        defaultManager: null,
        description: "A sample set of KYC requirements",
        isSignUpTemplate: false,
        name: "Example Template",
        removed: false,
        requirements: {
          options: {
            askForMemberOwnership: false,
            datazooEnabled: false,
            generateEncryptedCredential: false,
            idDocVerVendor: "AIScan",
            idDocDocumentSupportCategory: "LIMITED",
            idScanFlowStrictness: "non_strict",
            idScanFlowTries: 3,
            similarityThreshold: 0.5,
            passiveLivenessThreshold: 0.6,
            idScanFlowType: "disabled",
            idScanShowPhotoUploadOption: true,
            idScanShowSelfieUploadOption: false,
            membersEnabled: false,
            monitoring: {
              defaultInterval: null,
              highRiskInterval: null,
              lowRiskInterval: null,
              mediumRiskInterval: null,
            },
            signUpMethodEmail: true,
            signUpMethodWallet: false,
            sybilChecks: {
              attributeEnabled: true,
              mrzEnabled: true,
              onePerApplicant: true,
            },
            dataChecks: {
              BrexIO: {
                dataset: "super",
                enabled: false,
              },
              ComplyAdvantage: {
                enabled: false,
                ignoreNationalities: [{}],
                fuzziness: 0.5,
                extraParams: [
                  "http://platform.selfkey.org/schema/attribute/nationality.json",
                  "http://platform.selfkey.org/schema/attribute/date-of-birth.json",
                  "http://platform.selfkey.org/schema/attribute/country-of-residency.json",
                ],
              },
              Scraper: {
                enabled: false,
                ignoreNationalities: [{}],
                extraParams: [
                  "http://platform.selfkey.org/schema/attribute/nationality.json",
                  "http://platform.selfkey.org/schema/attribute/date-of-birth.json",
                  "http://platform.selfkey.org/schema/attribute/country-of-residency.json",
                ],
              },
            },
            backsideScanning: false,
          },
          forms: [],
          questions: [
            {
              jsonSchema: {
                description: "",
                title: "Email",
              },
              optional: false,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/email.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff391879",
            },
            {
              jsonSchema: {
                description: "",
                title: "First name",
              },
              optional: false,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/first-name.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff39187a",
            },
            {
              jsonSchema: {
                description: "",
                title: "Middle name",
              },
              optional: true,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/middle-name.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff39187b",
            },
            {
              jsonSchema: {
                description: "",
                title: "Last name",
              },
              optional: false,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/last-name.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff39187c",
            },
            {
              jsonSchema: {
                description: "",
                title: "Date of birth",
              },
              optional: false,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/date-of-birth.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff39187d",
            },
            {
              jsonSchema: {
                description: "",
                title: "Nationality",
              },
              optional: false,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/nationality.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff39187e",
            },
            {
              jsonSchema: {
                description: "",
                title: "Country of residency",
              },
              optional: false,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/country-of-residency.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff39187f",
            },
          ],
          uploads: [],
        },
        scope: "667ac4a1979c90daff3863ca",
        type: "individual",
        welcomeScreen: {
          disclaimerText: "",
          enabled: false,
        },
        reviewDecisions: [
          {
            statusCode: 2,
            scope: "667ac4a1979c90daff3863ca",
            required: 1,
            _id: "667ac8c3979c90daff3928d0",
          },
        ],
        history: [
          {
            event: "create",
            user: "6511268bd8253a4c96742da0",
            _id: "667ac85c979c90daff391884",
            timestamp: "2024-06-25T13:38:36.250Z",
          },
          {
            event: "edit",
            user: "6511268bd8253a4c96742da0",
            _id: "667ac86c9f4079752cdd1b3c",
            timestamp: "2024-06-25T13:38:52.393Z",
          },
          {
            event: "edit",
            user: "6511268bd8253a4c96742da0",
            _id: "667ac8c3979c90daff3928d1",
            timestamp: "2024-06-25T13:40:19.854Z",
          },
        ],
        legalLinks: [],
        memberTemplates: [
          {
            isDefault: true,
            memberLegalEntityTypes: [],
            legalEntityTypes: [],
            memberRoles: [
              "director_ltd",
              "shareholder",
              "ubo",
              "observer",
              "authorizedSignatory",
              "other",
              "manager",
              "member_llc",
              "other_llc",
              "grantor",
              "beneficiary_tst",
              "trustee",
              "protector",
              "founder",
              "director_fnd",
              "supervisor",
              "beneficiary_fnd",
              "generalPartner",
              "limitedPartner",
              "member",
            ],
            memberType: "individual",
            template: null,
            _id: "667ac85c979c90daff391881",
          },
        ],
        sections: [
          {
            components: ["SharesRegistry"],
            description: "",
            title: "",
            _id: "667ac85c979c90daff391880",
          },
        ],
        createdAt: "2024-06-25T13:38:36.223Z",
        updatedAt: "2024-06-25T13:40:19.859Z",
        __v: 3,
        submission: {
          documentTemplate: null,
        },
        scoreCard: "667ac8811a7aae9389f1390a",
      },
      type: "individual",
      walletScreenings: [],
      idVerificationChecks: [],
      members: [],
      statusLog: [
        {
          _id: "667aca711a7aae9389f1725a",
          code: 5,
          metaData: null,
          scope: "667ac4a1979c90daff3863ca",
          user: "6511268bd8253a4c96742da0",
          userType: "manager",
          timestamp: "2024-06-25T13:47:29.020Z",
          __v: 0,
        },
        {
          _id: "667bbb389f4079752cf46721",
          code: 6,
          metaData: {
            client: {
              city: null,
              country: null,
              ip: "172.16.0.108",
              userAgentParsed: {
                ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                browser: {
                  name: "Chrome",
                  version: "126.0.0.0",
                  major: "126",
                },
                engine: {
                  name: "Blink",
                  version: "126.0.0.0",
                },
                os: {
                  name: "Mac OS",
                  version: "10.15.7",
                },
                device: {
                  vendor: "Apple",
                  model: "Macintosh",
                },
              },
            },
          },
          scope: "667ac4a1979c90daff3863ca",
          user: "667aca711a7aae9389f1724d",
          timestamp: "2024-06-26T06:54:48.185Z",
          __v: 0,
        },
        {
          _id: "667bbb74979c90daff50a155",
          code: 11,
          metaData: {
            client: {
              city: null,
              country: null,
              ip: "172.16.0.108",
              userAgentParsed: {
                ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                browser: {
                  name: "Chrome",
                  version: "126.0.0.0",
                  major: "126",
                },
                engine: {
                  name: "Blink",
                  version: "126.0.0.0",
                },
                os: {
                  name: "Mac OS",
                  version: "10.15.7",
                },
                device: {
                  vendor: "Apple",
                  model: "Macintosh",
                },
              },
            },
            attributes: [
              {
                id: "667ac85c979c90daff39187d",
                data: "1988-11-15",
                schemaId:
                  "http://platform.selfkey.org/schema/attribute/date-of-birth.json",
                previousData: null,
              },
            ],
            questions: [],
            forms: [],
          },
          scope: "667ac4a1979c90daff3863ca",
          user: "667aca711a7aae9389f1724d",
          userType: "applicant",
          timestamp: "2024-06-26T06:55:48.033Z",
          __v: 0,
        },
        {
          _id: "667bbb849f4079752cf46e86",
          code: 11,
          metaData: {
            client: {
              city: null,
              country: null,
              ip: "172.16.0.108",
              userAgentParsed: {
                ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                browser: {
                  name: "Chrome",
                  version: "126.0.0.0",
                  major: "126",
                },
                engine: {
                  name: "Blink",
                  version: "126.0.0.0",
                },
                os: {
                  name: "Mac OS",
                  version: "10.15.7",
                },
                device: {
                  vendor: "Apple",
                  model: "Macintosh",
                },
              },
            },
            attributes: [
              {
                id: "667ac85c979c90daff39187e",
                data: {
                  country: "KP",
                },
                schemaId:
                  "http://platform.selfkey.org/schema/attribute/nationality.json",
                previousData: null,
              },
            ],
            questions: [],
            forms: [],
          },
          scope: "667ac4a1979c90daff3863ca",
          user: "667aca711a7aae9389f1724d",
          userType: "applicant",
          timestamp: "2024-06-26T06:56:04.693Z",
          __v: 0,
        },
        {
          _id: "667bbb89979c90daff50a36a",
          code: 11,
          metaData: {
            client: {
              city: null,
              country: null,
              ip: "172.16.0.108",
              userAgentParsed: {
                ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                browser: {
                  name: "Chrome",
                  version: "126.0.0.0",
                  major: "126",
                },
                engine: {
                  name: "Blink",
                  version: "126.0.0.0",
                },
                os: {
                  name: "Mac OS",
                  version: "10.15.7",
                },
                device: {
                  vendor: "Apple",
                  model: "Macintosh",
                },
              },
            },
            attributes: [
              {
                id: "667ac85c979c90daff39187f",
                data: {
                  country: "KP",
                },
                schemaId:
                  "http://platform.selfkey.org/schema/attribute/country-of-residency.json",
                previousData: null,
              },
            ],
            questions: [],
            forms: [],
          },
          scope: "667ac4a1979c90daff3863ca",
          user: "667aca711a7aae9389f1724d",
          userType: "applicant",
          timestamp: "2024-06-26T06:56:09.534Z",
          __v: 0,
        },
        {
          _id: "667bbbd7979c90daff50ab0c",
          code: 4,
          metaData: {
            client: {
              city: null,
              country: null,
              ip: "172.16.0.28",
              userAgentParsed: {
                ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                browser: {
                  name: "Chrome",
                  version: "126.0.0.0",
                  major: "126",
                },
                engine: {
                  name: "Blink",
                  version: "126.0.0.0",
                },
                os: {
                  name: "Mac OS",
                  version: "10.15.7",
                },
                device: {
                  vendor: "Apple",
                  model: "Macintosh",
                },
              },
            },
          },
          scope: "667ac4a1979c90daff3863ca",
          user: "667aca711a7aae9389f1724d",
          userType: "applicant",
          timestamp: "2024-06-26T06:57:27.562Z",
          __v: 0,
        },
        {
          _id: "667bbd85979c90daff512fd0",
          code: 14,
          metaData: {
            newManagers: ["6511268bd8253a4c96742da0"],
          },
          scope: "667ac4a1979c90daff3863ca",
          user: "6511268bd8253a4c96742da0",
          userType: "manager",
          timestamp: "2024-06-26T07:04:37.037Z",
          __v: 0,
        },
        {
          _id: "667bbd89979c90daff51321c",
          code: 3,
          note: null,
          scope: "667ac4a1979c90daff3863ca",
          user: "6511268bd8253a4c96742da0",
          userType: "manager",
          timestamp: "2024-06-26T07:04:41.909Z",
          __v: 0,
        },
      ],
      currentStatus: 3,
      createdAt: "2024-06-25T13:47:29.040Z",
      updatedAt: "2024-06-26T07:04:41.927Z",
      id: "667aca711a7aae9389f17250",
      statusName: "Rejected",
    },
    {
      attachments: [],
      attributes: {
        "667ac85c979c90daff391879": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "Email",
          optional: false,
          overrides: {
            required: [],
          },
          schemaId: "http://platform.selfkey.org/schema/attribute/email.json",
          valid: true,
          value: "charlie+example2@kyc-chain.com",
          weight: 0,
          _id: "667aca289f4079752cdd4cc0",
        },
        "667ac85c979c90daff39187a": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "First name",
          optional: false,
          overrides: {
            required: [],
          },
          schemaId:
            "http://platform.selfkey.org/schema/attribute/first-name.json",
          valid: true,
          value: "Samantha",
          weight: 0,
          _id: "667aca289f4079752cdd4cc1",
        },
        "667ac85c979c90daff39187b": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "Middle name",
          optional: true,
          overrides: {
            required: [],
          },
          schemaId:
            "http://platform.selfkey.org/schema/attribute/middle-name.json",
          valid: true,
          value: "Emry",
          weight: 0,
          _id: "667aca289f4079752cdd4cc2",
        },
        "667ac85c979c90daff39187c": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "Last name",
          optional: false,
          overrides: {
            required: [],
          },
          schemaId:
            "http://platform.selfkey.org/schema/attribute/last-name.json",
          valid: true,
          value: "Robinson",
          weight: 0,
          _id: "667aca289f4079752cdd4cc3",
        },
        "667ac85c979c90daff39187d": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "Date of birth",
          optional: false,
          overrides: {
            required: [],
          },
          schemaId:
            "http://platform.selfkey.org/schema/attribute/date-of-birth.json",
          valid: true,
          value: "2008-07-01",
          weight: 0,
          _id: "667aca289f4079752cdd4cc4",
        },
        "667ac85c979c90daff39187e": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "Nationality",
          optional: false,
          overrides: {
            required: [],
          },
          schemaId:
            "http://platform.selfkey.org/schema/attribute/nationality.json",
          valid: true,
          value: {
            country: "GB",
          },
          weight: 0,
          _id: "667aca289f4079752cdd4cc5",
        },
        "667ac85c979c90daff39187f": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "Country of residency",
          optional: false,
          overrides: {
            required: [],
          },
          schemaId:
            "http://platform.selfkey.org/schema/attribute/country-of-residency.json",
          valid: true,
          value: {
            country: "AU",
          },
          weight: 0,
          _id: "667aca289f4079752cdd4cc6",
        },
      },
      dataChecks: [],
      documentOrders: [],
      datazooChecks: [],
      forms: [],
      idScanFlowTries: 0,
      labels: [],
      managers: [],
      memberTemplates: [],
      notes: [],
      options: {
        askForMemberOwnership: false,
        datazooEnabled: false,
        idDocVerVendor: "AIScan",
        idScanFlowStrictness: "non_strict",
        idScanFlowTriesLimit: 3,
        idScanFlowType: "disabled",
        idScanShowPhotoUploadOption: true,
        idScanShowSelfieUploadOption: false,
        membersEnabled: false,
      },
      owners: [
        {
          _id: "667aca289f4079752cdd4cb8",
          email: "charlie+example2@kyc-chain.com",
          name: "Samantha Robinson",
        },
      ],
      payments: [],
      questions: {},
      riskScoring: {
        outOfDate: false,
        results: [
          {
            calculation: {
              age: {
                score: 100,
                value: "2008-07-01",
                weight: 0.3,
              },
              nationality: {
                score: 0,
                value: {
                  country: "GB",
                  countryScore: "72.05",
                },
                weight: 0.35,
              },
              residency: {
                score: 0,
                value: {
                  country: "AU",
                  countryScore: "78.32",
                },
                weight: 0.35,
              },
            },
            category: "medium",
            notes: [],
            owner: null,
            scoreCard: "667ac8811a7aae9389f1390a",
            timestamp: "2024-06-26T06:56:14.915Z",
            total: 30,
            _id: "667bbb8e1a7aae93890895fc",
          },
        ],
        currentCategory: "medium",
        statusMessage: null,
        statusMetadata: null,
      },
      sections: [
        {
          components: ["SharesRegistry"],
          description: "",
          title: "",
          _id: "667ac85c979c90daff391880",
        },
      ],
      template: {
        _id: "667ac85c979c90daff391877",
        active: true,
        allowDynamicAttributes: false,
        defaultManager: null,
        description: "A sample set of KYC requirements",
        isSignUpTemplate: false,
        name: "Example Template",
        removed: false,
        requirements: {
          options: {
            askForMemberOwnership: false,
            datazooEnabled: false,
            generateEncryptedCredential: false,
            idDocVerVendor: "AIScan",
            idDocDocumentSupportCategory: "LIMITED",
            idScanFlowStrictness: "non_strict",
            idScanFlowTries: 3,
            similarityThreshold: 0.5,
            passiveLivenessThreshold: 0.6,
            idScanFlowType: "disabled",
            idScanShowPhotoUploadOption: true,
            idScanShowSelfieUploadOption: false,
            membersEnabled: false,
            monitoring: {
              defaultInterval: null,
              highRiskInterval: null,
              lowRiskInterval: null,
              mediumRiskInterval: null,
            },
            signUpMethodEmail: true,
            signUpMethodWallet: false,
            sybilChecks: {
              attributeEnabled: true,
              mrzEnabled: true,
              onePerApplicant: true,
            },
            dataChecks: {
              BrexIO: {
                dataset: "super",
                enabled: false,
              },
              ComplyAdvantage: {
                enabled: false,
                ignoreNationalities: [{}],
                fuzziness: 0.5,
                extraParams: [
                  "http://platform.selfkey.org/schema/attribute/nationality.json",
                  "http://platform.selfkey.org/schema/attribute/date-of-birth.json",
                  "http://platform.selfkey.org/schema/attribute/country-of-residency.json",
                ],
              },
              Scraper: {
                enabled: false,
                ignoreNationalities: [{}],
                extraParams: [
                  "http://platform.selfkey.org/schema/attribute/nationality.json",
                  "http://platform.selfkey.org/schema/attribute/date-of-birth.json",
                  "http://platform.selfkey.org/schema/attribute/country-of-residency.json",
                ],
              },
            },
            backsideScanning: false,
          },
          forms: [],
          questions: [
            {
              jsonSchema: {
                description: "",
                title: "Email",
              },
              optional: false,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/email.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff391879",
            },
            {
              jsonSchema: {
                description: "",
                title: "First name",
              },
              optional: false,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/first-name.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff39187a",
            },
            {
              jsonSchema: {
                description: "",
                title: "Middle name",
              },
              optional: true,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/middle-name.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff39187b",
            },
            {
              jsonSchema: {
                description: "",
                title: "Last name",
              },
              optional: false,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/last-name.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff39187c",
            },
            {
              jsonSchema: {
                description: "",
                title: "Date of birth",
              },
              optional: false,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/date-of-birth.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff39187d",
            },
            {
              jsonSchema: {
                description: "",
                title: "Nationality",
              },
              optional: false,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/nationality.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff39187e",
            },
            {
              jsonSchema: {
                description: "",
                title: "Country of residency",
              },
              optional: false,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/country-of-residency.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff39187f",
            },
          ],
          uploads: [],
        },
        scope: "667ac4a1979c90daff3863ca",
        type: "individual",
        welcomeScreen: {
          disclaimerText: "",
          enabled: false,
        },
        reviewDecisions: [
          {
            statusCode: 2,
            scope: "667ac4a1979c90daff3863ca",
            required: 1,
            _id: "667ac8c3979c90daff3928d0",
          },
        ],
        history: [
          {
            event: "create",
            user: "6511268bd8253a4c96742da0",
            _id: "667ac85c979c90daff391884",
            timestamp: "2024-06-25T13:38:36.250Z",
          },
          {
            event: "edit",
            user: "6511268bd8253a4c96742da0",
            _id: "667ac86c9f4079752cdd1b3c",
            timestamp: "2024-06-25T13:38:52.393Z",
          },
          {
            event: "edit",
            user: "6511268bd8253a4c96742da0",
            _id: "667ac8c3979c90daff3928d1",
            timestamp: "2024-06-25T13:40:19.854Z",
          },
        ],
        legalLinks: [],
        memberTemplates: [
          {
            isDefault: true,
            memberLegalEntityTypes: [],
            legalEntityTypes: [],
            memberRoles: [
              "director_ltd",
              "shareholder",
              "ubo",
              "observer",
              "authorizedSignatory",
              "other",
              "manager",
              "member_llc",
              "other_llc",
              "grantor",
              "beneficiary_tst",
              "trustee",
              "protector",
              "founder",
              "director_fnd",
              "supervisor",
              "beneficiary_fnd",
              "generalPartner",
              "limitedPartner",
              "member",
            ],
            memberType: "individual",
            template: null,
            _id: "667ac85c979c90daff391881",
          },
        ],
        sections: [
          {
            components: ["SharesRegistry"],
            description: "",
            title: "",
            _id: "667ac85c979c90daff391880",
          },
        ],
        createdAt: "2024-06-25T13:38:36.223Z",
        updatedAt: "2024-06-25T13:40:19.859Z",
        __v: 3,
        submission: {
          documentTemplate: null,
        },
        scoreCard: "667ac8811a7aae9389f1390a",
      },
      type: "individual",
      walletScreenings: [],
      idVerificationChecks: [],
      members: [],
      statusLog: [
        {
          _id: "667aca289f4079752cdd4cc7",
          code: 5,
          metaData: null,
          scope: "667ac4a1979c90daff3863ca",
          user: "6511268bd8253a4c96742da0",
          userType: "manager",
          timestamp: "2024-06-25T13:46:16.246Z",
          __v: 0,
        },
        {
          _id: "667bbae71a7aae93890883df",
          code: 6,
          metaData: {
            client: {
              city: null,
              country: null,
              ip: "172.16.0.108",
              userAgentParsed: {
                ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                browser: {
                  name: "Chrome",
                  version: "126.0.0.0",
                  major: "126",
                },
                engine: {
                  name: "Blink",
                  version: "126.0.0.0",
                },
                os: {
                  name: "Mac OS",
                  version: "10.15.7",
                },
                device: {
                  vendor: "Apple",
                  model: "Macintosh",
                },
              },
            },
          },
          scope: "667ac4a1979c90daff3863ca",
          user: "667aca289f4079752cdd4cb8",
          timestamp: "2024-06-26T06:53:27.287Z",
          __v: 0,
        },
        {
          _id: "667bbaf5979c90daff5093e6",
          code: 11,
          metaData: {
            client: {
              city: null,
              country: null,
              ip: "172.16.0.108",
              userAgentParsed: {
                ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                browser: {
                  name: "Chrome",
                  version: "126.0.0.0",
                  major: "126",
                },
                engine: {
                  name: "Blink",
                  version: "126.0.0.0",
                },
                os: {
                  name: "Mac OS",
                  version: "10.15.7",
                },
                device: {
                  vendor: "Apple",
                  model: "Macintosh",
                },
              },
            },
            attributes: [
              {
                id: "667ac85c979c90daff39187b",
                data: "Ma",
                schemaId:
                  "http://platform.selfkey.org/schema/attribute/middle-name.json",
                previousData: "",
              },
            ],
            questions: [],
            forms: [],
          },
          scope: "667ac4a1979c90daff3863ca",
          user: "667aca289f4079752cdd4cb8",
          userType: "applicant",
          timestamp: "2024-06-26T06:53:41.034Z",
          __v: 0,
        },
        {
          _id: "667bbafd9f4079752cf46139",
          code: 11,
          metaData: {
            client: {
              city: null,
              country: null,
              ip: "172.16.0.108",
              userAgentParsed: {
                ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                browser: {
                  name: "Chrome",
                  version: "126.0.0.0",
                  major: "126",
                },
                engine: {
                  name: "Blink",
                  version: "126.0.0.0",
                },
                os: {
                  name: "Mac OS",
                  version: "10.15.7",
                },
                device: {
                  vendor: "Apple",
                  model: "Macintosh",
                },
              },
            },
            attributes: [
              {
                id: "667ac85c979c90daff39187b",
                data: null,
                schemaId:
                  "http://platform.selfkey.org/schema/attribute/middle-name.json",
                previousData: "Ma",
              },
            ],
            questions: [],
            forms: [],
          },
          scope: "667ac4a1979c90daff3863ca",
          user: "667aca289f4079752cdd4cb8",
          userType: "applicant",
          timestamp: "2024-06-26T06:53:49.086Z",
          __v: 0,
        },
        {
          _id: "667bbb001a7aae9389088691",
          code: 11,
          metaData: {
            client: {
              city: null,
              country: null,
              ip: "172.16.0.108",
              userAgentParsed: {
                ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                browser: {
                  name: "Chrome",
                  version: "126.0.0.0",
                  major: "126",
                },
                engine: {
                  name: "Blink",
                  version: "126.0.0.0",
                },
                os: {
                  name: "Mac OS",
                  version: "10.15.7",
                },
                device: {
                  vendor: "Apple",
                  model: "Macintosh",
                },
              },
            },
            attributes: [
              {
                id: "667ac85c979c90daff39187b",
                data: "Emry",
                schemaId:
                  "http://platform.selfkey.org/schema/attribute/middle-name.json",
                previousData: null,
              },
            ],
            questions: [],
            forms: [],
          },
          scope: "667ac4a1979c90daff3863ca",
          user: "667aca289f4079752cdd4cb8",
          userType: "applicant",
          timestamp: "2024-06-26T06:53:52.036Z",
          __v: 0,
        },
        {
          _id: "667bbb0e1a7aae9389088858",
          code: 11,
          metaData: {
            client: {
              city: null,
              country: null,
              ip: "172.16.0.108",
              userAgentParsed: {
                ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                browser: {
                  name: "Chrome",
                  version: "126.0.0.0",
                  major: "126",
                },
                engine: {
                  name: "Blink",
                  version: "126.0.0.0",
                },
                os: {
                  name: "Mac OS",
                  version: "10.15.7",
                },
                device: {
                  vendor: "Apple",
                  model: "Macintosh",
                },
              },
            },
            attributes: [
              {
                id: "667ac85c979c90daff39187d",
                data: "2008-07-01",
                schemaId:
                  "http://platform.selfkey.org/schema/attribute/date-of-birth.json",
                previousData: null,
              },
            ],
            questions: [],
            forms: [],
          },
          scope: "667ac4a1979c90daff3863ca",
          user: "667aca289f4079752cdd4cb8",
          userType: "applicant",
          timestamp: "2024-06-26T06:54:06.702Z",
          __v: 0,
        },
        {
          _id: "667bbb14979c90daff509707",
          code: 11,
          metaData: {
            client: {
              city: null,
              country: null,
              ip: "172.16.0.108",
              userAgentParsed: {
                ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                browser: {
                  name: "Chrome",
                  version: "126.0.0.0",
                  major: "126",
                },
                engine: {
                  name: "Blink",
                  version: "126.0.0.0",
                },
                os: {
                  name: "Mac OS",
                  version: "10.15.7",
                },
                device: {
                  vendor: "Apple",
                  model: "Macintosh",
                },
              },
            },
            attributes: [
              {
                id: "667ac85c979c90daff39187e",
                data: {
                  country: "GB",
                },
                schemaId:
                  "http://platform.selfkey.org/schema/attribute/nationality.json",
                previousData: null,
              },
              {
                id: "667ac85c979c90daff39187f",
                data: {
                  country: "AU",
                },
                schemaId:
                  "http://platform.selfkey.org/schema/attribute/country-of-residency.json",
                previousData: null,
              },
            ],
            questions: [],
            forms: [],
          },
          scope: "667ac4a1979c90daff3863ca",
          user: "667aca289f4079752cdd4cb8",
          userType: "applicant",
          timestamp: "2024-06-26T06:54:12.008Z",
          __v: 0,
        },
        {
          _id: "667bbb169f4079752cf463af",
          code: 4,
          metaData: {
            client: {
              city: null,
              country: null,
              ip: "172.16.0.108",
              userAgentParsed: {
                ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                browser: {
                  name: "Chrome",
                  version: "126.0.0.0",
                  major: "126",
                },
                engine: {
                  name: "Blink",
                  version: "126.0.0.0",
                },
                os: {
                  name: "Mac OS",
                  version: "10.15.7",
                },
                device: {
                  vendor: "Apple",
                  model: "Macintosh",
                },
              },
            },
          },
          scope: "667ac4a1979c90daff3863ca",
          user: "667aca289f4079752cdd4cb8",
          userType: "applicant",
          timestamp: "2024-06-26T06:54:14.851Z",
          __v: 0,
        },
      ],
      currentStatus: 4,
      createdAt: "2024-06-25T13:46:16.343Z",
      updatedAt: "2024-06-26T06:56:14.937Z",
      id: "667aca289f4079752cdd4cbd",
      statusName: "Ready For Review",
    },
    {
      attachments: [],
      attributes: {
        "667ac85c979c90daff391879": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "Email",
          optional: false,
          overrides: {
            required: [],
          },
          schemaId: "http://platform.selfkey.org/schema/attribute/email.json",
          valid: true,
          value: "charlie+example1@kyc-chain.com",
          weight: 0,
          _id: "667aca0c1a7aae9389f1672d",
        },
        "667ac85c979c90daff39187a": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "First name",
          optional: false,
          overrides: {
            required: [],
          },
          schemaId:
            "http://platform.selfkey.org/schema/attribute/first-name.json",
          valid: true,
          value: "Jeffrey",
          weight: 0,
          _id: "667aca0c1a7aae9389f1672e",
        },
        "667ac85c979c90daff39187b": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "Middle name",
          optional: true,
          overrides: {
            required: [],
          },
          schemaId:
            "http://platform.selfkey.org/schema/attribute/middle-name.json",
          valid: true,
          value: "",
          weight: 0,
          _id: "667aca0c1a7aae9389f1672f",
        },
        "667ac85c979c90daff39187c": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "Last name",
          optional: false,
          overrides: {
            required: [],
          },
          schemaId:
            "http://platform.selfkey.org/schema/attribute/last-name.json",
          valid: true,
          value: "Clements",
          weight: 0,
          _id: "667aca0c1a7aae9389f16730",
        },
        "667ac85c979c90daff39187d": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "Date of birth",
          optional: false,
          overrides: {
            required: [],
          },
          schemaId:
            "http://platform.selfkey.org/schema/attribute/date-of-birth.json",
          valid: true,
          value: "1975-06-01",
          weight: 0,
          _id: "667aca0c1a7aae9389f16731",
        },
        "667ac85c979c90daff39187e": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "Nationality",
          optional: false,
          overrides: {
            required: [],
          },
          schemaId:
            "http://platform.selfkey.org/schema/attribute/nationality.json",
          valid: true,
          value: {
            country: "US",
          },
          weight: 0,
          _id: "667aca0c1a7aae9389f16732",
        },
        "667ac85c979c90daff39187f": {
          addedByUser: false,
          description: "",
          idVerification: {
            dynamic: false,
            sendDocument: false,
            sendDocumentBackside: false,
            sendSelfieWithDocument: false,
          },
          isAdditional: false,
          label: "Country of residency",
          optional: false,
          overrides: {
            required: [],
          },
          schemaId:
            "http://platform.selfkey.org/schema/attribute/country-of-residency.json",
          valid: true,
          value: {
            country: "US",
          },
          weight: 0,
          _id: "667aca0c1a7aae9389f16733",
        },
      },
      dataChecks: [],
      documentOrders: [],
      datazooChecks: [],
      forms: [],
      idScanFlowTries: 0,
      labels: [],
      managers: [
        {
          role: "manager",
          user: "6511268bd8253a4c96742da0",
          _id: "667bbc209f4079752cf48210",
        },
      ],
      memberTemplates: [],
      notes: [],
      options: {
        askForMemberOwnership: false,
        datazooEnabled: false,
        idDocVerVendor: "AIScan",
        idScanFlowStrictness: "non_strict",
        idScanFlowTriesLimit: 3,
        idScanFlowType: "disabled",
        idScanShowPhotoUploadOption: true,
        idScanShowSelfieUploadOption: false,
        membersEnabled: false,
      },
      owners: [
        {
          _id: "667aca0c1a7aae9389f16727",
          email: "charlie+example1@kyc-chain.com",
          name: "Jeffrey Clements",
        },
      ],
      payments: [],
      questions: {},
      riskScoring: {
        outOfDate: false,
        results: [
          {
            calculation: {
              age: {
                score: 0,
                value: "1975-06-01",
                weight: 0.3,
              },
              nationality: {
                score: 0,
                value: {
                  country: "US",
                  countryScore: "71.05",
                },
                weight: 0.35,
              },
              residency: {
                score: 0,
                value: {
                  country: "US",
                  countryScore: "71.05",
                },
                weight: 0.35,
              },
            },
            category: "low",
            notes: [],
            owner: null,
            scoreCard: "667ac8811a7aae9389f1390a",
            timestamp: "2024-06-26T06:55:11.135Z",
            total: 0,
            _id: "667bbb4f979c90daff509d3c",
          },
        ],
        currentCategory: "low",
        statusMessage: null,
        statusMetadata: null,
      },
      sections: [
        {
          components: ["SharesRegistry"],
          description: "",
          title: "",
          _id: "667ac85c979c90daff391880",
        },
      ],
      template: {
        _id: "667ac85c979c90daff391877",
        active: true,
        allowDynamicAttributes: false,
        defaultManager: null,
        description: "A sample set of KYC requirements",
        isSignUpTemplate: false,
        name: "Example Template",
        removed: false,
        requirements: {
          options: {
            askForMemberOwnership: false,
            datazooEnabled: false,
            generateEncryptedCredential: false,
            idDocVerVendor: "AIScan",
            idDocDocumentSupportCategory: "LIMITED",
            idScanFlowStrictness: "non_strict",
            idScanFlowTries: 3,
            similarityThreshold: 0.5,
            passiveLivenessThreshold: 0.6,
            idScanFlowType: "disabled",
            idScanShowPhotoUploadOption: true,
            idScanShowSelfieUploadOption: false,
            membersEnabled: false,
            monitoring: {
              defaultInterval: null,
              highRiskInterval: null,
              lowRiskInterval: null,
              mediumRiskInterval: null,
            },
            signUpMethodEmail: true,
            signUpMethodWallet: false,
            sybilChecks: {
              attributeEnabled: true,
              mrzEnabled: true,
              onePerApplicant: true,
            },
            dataChecks: {
              BrexIO: {
                dataset: "super",
                enabled: false,
              },
              ComplyAdvantage: {
                enabled: false,
                ignoreNationalities: [{}],
                fuzziness: 0.5,
                extraParams: [
                  "http://platform.selfkey.org/schema/attribute/nationality.json",
                  "http://platform.selfkey.org/schema/attribute/date-of-birth.json",
                  "http://platform.selfkey.org/schema/attribute/country-of-residency.json",
                ],
              },
              Scraper: {
                enabled: false,
                ignoreNationalities: [{}],
                extraParams: [
                  "http://platform.selfkey.org/schema/attribute/nationality.json",
                  "http://platform.selfkey.org/schema/attribute/date-of-birth.json",
                  "http://platform.selfkey.org/schema/attribute/country-of-residency.json",
                ],
              },
            },
            backsideScanning: false,
          },
          forms: [],
          questions: [
            {
              jsonSchema: {
                description: "",
                title: "Email",
              },
              optional: false,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/email.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff391879",
            },
            {
              jsonSchema: {
                description: "",
                title: "First name",
              },
              optional: false,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/first-name.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff39187a",
            },
            {
              jsonSchema: {
                description: "",
                title: "Middle name",
              },
              optional: true,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/middle-name.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff39187b",
            },
            {
              jsonSchema: {
                description: "",
                title: "Last name",
              },
              optional: false,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/last-name.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff39187c",
            },
            {
              jsonSchema: {
                description: "",
                title: "Date of birth",
              },
              optional: false,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/date-of-birth.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff39187d",
            },
            {
              jsonSchema: {
                description: "",
                title: "Nationality",
              },
              optional: false,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/nationality.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff39187e",
            },
            {
              jsonSchema: {
                description: "",
                title: "Country of residency",
              },
              optional: false,
              schemaId:
                "http://platform.selfkey.org/schema/attribute/country-of-residency.json",
              uiType: "attribute",
              weight: 0,
              _id: "667ac85c979c90daff39187f",
            },
          ],
          uploads: [],
        },
        scope: "667ac4a1979c90daff3863ca",
        type: "individual",
        welcomeScreen: {
          disclaimerText: "",
          enabled: false,
        },
        reviewDecisions: [
          {
            statusCode: 2,
            scope: "667ac4a1979c90daff3863ca",
            required: 1,
            _id: "667ac8c3979c90daff3928d0",
          },
        ],
        history: [
          {
            event: "create",
            user: "6511268bd8253a4c96742da0",
            _id: "667ac85c979c90daff391884",
            timestamp: "2024-06-25T13:38:36.250Z",
          },
          {
            event: "edit",
            user: "6511268bd8253a4c96742da0",
            _id: "667ac86c9f4079752cdd1b3c",
            timestamp: "2024-06-25T13:38:52.393Z",
          },
          {
            event: "edit",
            user: "6511268bd8253a4c96742da0",
            _id: "667ac8c3979c90daff3928d1",
            timestamp: "2024-06-25T13:40:19.854Z",
          },
        ],
        legalLinks: [],
        memberTemplates: [
          {
            isDefault: true,
            memberLegalEntityTypes: [],
            legalEntityTypes: [],
            memberRoles: [
              "director_ltd",
              "shareholder",
              "ubo",
              "observer",
              "authorizedSignatory",
              "other",
              "manager",
              "member_llc",
              "other_llc",
              "grantor",
              "beneficiary_tst",
              "trustee",
              "protector",
              "founder",
              "director_fnd",
              "supervisor",
              "beneficiary_fnd",
              "generalPartner",
              "limitedPartner",
              "member",
            ],
            memberType: "individual",
            template: null,
            _id: "667ac85c979c90daff391881",
          },
        ],
        sections: [
          {
            components: ["SharesRegistry"],
            description: "",
            title: "",
            _id: "667ac85c979c90daff391880",
          },
        ],
        createdAt: "2024-06-25T13:38:36.223Z",
        updatedAt: "2024-06-25T13:40:19.859Z",
        __v: 3,
        submission: {
          documentTemplate: null,
        },
        scoreCard: "667ac8811a7aae9389f1390a",
      },
      type: "individual",
      walletScreenings: [],
      idVerificationChecks: [],
      members: [],
      statusLog: [
        {
          _id: "667aca0c1a7aae9389f16734",
          code: 5,
          metaData: null,
          scope: "667ac4a1979c90daff3863ca",
          user: "6511268bd8253a4c96742da0",
          userType: "manager",
          timestamp: "2024-06-25T13:45:48.922Z",
          __v: 0,
        },
        {
          _id: "667bbabc1a7aae9389087f76",
          code: 6,
          metaData: {
            client: {
              city: null,
              country: null,
              ip: "172.16.0.108",
              userAgentParsed: {
                ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                browser: {
                  name: "Chrome",
                  version: "126.0.0.0",
                  major: "126",
                },
                engine: {
                  name: "Blink",
                  version: "126.0.0.0",
                },
                os: {
                  name: "Mac OS",
                  version: "10.15.7",
                },
                device: {
                  vendor: "Apple",
                  model: "Macintosh",
                },
              },
            },
          },
          scope: "667ac4a1979c90daff3863ca",
          user: "667aca0c1a7aae9389f16727",
          timestamp: "2024-06-26T06:52:44.705Z",
          __v: 0,
        },
        {
          _id: "667bbacf1a7aae9389088161",
          code: 11,
          metaData: {
            client: {
              city: null,
              country: null,
              ip: "172.16.0.108",
              userAgentParsed: {
                ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                browser: {
                  name: "Chrome",
                  version: "126.0.0.0",
                  major: "126",
                },
                engine: {
                  name: "Blink",
                  version: "126.0.0.0",
                },
                os: {
                  name: "Mac OS",
                  version: "10.15.7",
                },
                device: {
                  vendor: "Apple",
                  model: "Macintosh",
                },
              },
            },
            attributes: [
              {
                id: "667ac85c979c90daff39187d",
                data: "1975-06-01",
                schemaId:
                  "http://platform.selfkey.org/schema/attribute/date-of-birth.json",
                previousData: null,
              },
            ],
            questions: [],
            forms: [],
          },
          scope: "667ac4a1979c90daff3863ca",
          user: "667aca0c1a7aae9389f16727",
          userType: "applicant",
          timestamp: "2024-06-26T06:53:03.885Z",
          __v: 0,
        },
        {
          _id: "667bbad41a7aae9389088223",
          code: 11,
          metaData: {
            client: {
              city: null,
              country: null,
              ip: "172.16.0.108",
              userAgentParsed: {
                ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                browser: {
                  name: "Chrome",
                  version: "126.0.0.0",
                  major: "126",
                },
                engine: {
                  name: "Blink",
                  version: "126.0.0.0",
                },
                os: {
                  name: "Mac OS",
                  version: "10.15.7",
                },
                device: {
                  vendor: "Apple",
                  model: "Macintosh",
                },
              },
            },
            attributes: [
              {
                id: "667ac85c979c90daff39187e",
                data: {
                  country: "US",
                },
                schemaId:
                  "http://platform.selfkey.org/schema/attribute/nationality.json",
                previousData: null,
              },
              {
                id: "667ac85c979c90daff39187f",
                data: {
                  country: "US",
                },
                schemaId:
                  "http://platform.selfkey.org/schema/attribute/country-of-residency.json",
                previousData: null,
              },
            ],
            questions: [],
            forms: [],
          },
          scope: "667ac4a1979c90daff3863ca",
          user: "667aca0c1a7aae9389f16727",
          userType: "applicant",
          timestamp: "2024-06-26T06:53:08.457Z",
          __v: 0,
        },
        {
          _id: "667bbad7979c90daff5090ad",
          code: 4,
          metaData: {
            client: {
              city: null,
              country: null,
              ip: "172.16.0.108",
              userAgentParsed: {
                ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
                browser: {
                  name: "Chrome",
                  version: "126.0.0.0",
                  major: "126",
                },
                engine: {
                  name: "Blink",
                  version: "126.0.0.0",
                },
                os: {
                  name: "Mac OS",
                  version: "10.15.7",
                },
                device: {
                  vendor: "Apple",
                  model: "Macintosh",
                },
              },
            },
          },
          scope: "667ac4a1979c90daff3863ca",
          user: "667aca0c1a7aae9389f16727",
          userType: "applicant",
          timestamp: "2024-06-26T06:53:11.073Z",
          __v: 0,
        },
        {
          _id: "667bbc209f4079752cf48211",
          code: 14,
          metaData: {
            newManagers: ["6511268bd8253a4c96742da0"],
          },
          scope: "667ac4a1979c90daff3863ca",
          user: "6511268bd8253a4c96742da0",
          userType: "manager",
          timestamp: "2024-06-26T06:58:40.135Z",
          __v: 0,
        },
        {
          _id: "667bbc249f4079752cf48523",
          code: 2,
          note: null,
          scope: "667ac4a1979c90daff3863ca",
          user: "6511268bd8253a4c96742da0",
          userType: "manager",
          timestamp: "2024-06-26T06:58:44.734Z",
          __v: 0,
        },
      ],
      currentStatus: 2,
      createdAt: "2024-06-25T13:45:49.007Z",
      updatedAt: "2024-06-26T06:58:44.752Z",
      id: "667aca0c1a7aae9389f1672a",
      statusName: "Approved",
    },
  ],
  total: 5,
};
