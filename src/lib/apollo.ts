import {ApolloClient, InMemoryCache} from '@apollo/client'

export const client = new ApolloClient ({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4nkyorr0bqg01xmg70q4obx/master",
  cache: new InMemoryCache()
})