export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5ea095a335f17e3bed55210b',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-u89wdjsn',
                  apiId: 'ad2e2420-dda8-4225-b596-a004b929c949'
                },
                {
                  buildHookId: '5ea095a3f66f9a70d386a5bc',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-rnioa6j5',
                  apiId: '118e2664-c0ca-467b-8797-6b41fbd70909'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/al-kivi/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-rnioa6j5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
