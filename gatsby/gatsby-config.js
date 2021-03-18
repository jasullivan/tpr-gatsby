import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `tpr media`,
    siteUrl: `http://tpr-media.com`,
    description: `Intelligent communications campaigns for the creative industries and projects with a social impact`,
  },
  plugins: [
    // this plugin surfaces the css to gatsby and so gatsby can figure out what the critical css is and
    // do everything efficiently
    'gatsby-plugin-styled-components',
    {
      // thsi is the name of the plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'ldyzji7o',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
