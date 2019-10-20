export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5daca1b53649f53c8324067f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-vuzic1k3',
                  apiId: '1db64ebc-d2e9-470f-b45d-ce555c36e3a2'
                },
                {
                  buildHookId: '5daca1b5be319f5fef9356b6',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-xn3i4q8v',
                  apiId: '9cf65040-87d8-4dd4-a72e-efc2126207f2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thegravurebackup/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-xn3i4q8v.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
