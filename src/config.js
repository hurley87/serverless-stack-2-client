const dev = {
  STRIPE_KEY: "pk_test_batxHroZdYE8W51HdTbovEUV",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-25n10irxzre6"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://j4x8ad4g39.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_2Vz0sJqr2",
    APP_CLIENT_ID: "71te3hadgp576hoqq1d8oftl",
    IDENTITY_POOL_ID: "us-east-1:ea069813-335d-407c-8110-6b492550cb45"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_batxHroZdYE8W51HdTbovEUV",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://5by75p4gn3.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_udmFFSb92",
    APP_CLIENT_ID: "4hmari2sqvskrup67crkqa4rmo",
    IDENTITY_POOL_ID: "us-east-1:ceef8ccc-0a19-4616-9067-854dc69c2d82"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
