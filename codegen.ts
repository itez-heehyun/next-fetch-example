import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://api.itez.io/cakey/graphql",
  documents: "src/api/documents/**/*.gql",
  generates: {
    "src/api/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
