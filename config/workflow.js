module.exports.workflow = {
  "rdmp": {
    "draft": {
      config: {
        workflow: {
          stage: 'draft',
          stageLabel: 'Draft',
        },
        authorization: {
          viewRoles: ['Admin', 'Librarians'],
          editRoles: ['Admin', 'Librarians']
        },
        form: 'default-1.0-draft'
      },
      starting: true
    }
  },
  "dataRecord": {
    "draft": {
      config: {
        workflow: {
          stage: 'draft',
          stageLabel: 'Draft',
        },
        authorization: {
          viewRoles: ['Admin', 'Librarians'],
          editRoles: ['Admin', 'Librarians']
        },
        form: 'dataRecord-1.0-draft'
      },
      starting: true
    }
  },
  "dataPublication": {
    "draft": {
      config: {
        workflow: {
          stage: 'draft',
          stageLabel: 'Draft',
        },
        authorization: {
          viewRoles: ['Admin', 'Librarians'],
          editRoles: ['Admin', 'Librarians']
        },
        form: 'dataPublication-1.0-draft',
        displayIndex: 1
      },
      starting: true
    },
    "queued": {
      config: {
        workflow: {
          stage: 'queued',
          stageLabel: 'Queued',
        },
        authorization: {
          viewRoles: ['Admin', 'Librarians'],
          editRoles: ['Admin', 'Librarians']
        },
        form: 'dataPublication-1.0-queued',
        displayIndex: 2
      }
    },
    "embargoed": {
      config: {
        workflow: {
          stage: 'embargoed',
          stageLabel: 'Embargoed',
        },
        authorization: {
          viewRoles: ['Admin', 'Librarians'],
          editRoles: ['Admin', 'Librarians']
        },
        form: 'dataPublication-1.0-embargoed',
        displayIndex: 3
      }
    },
    "reviewing": {
      config: {
        workflow: {
          stage: 'reviewing',
          stageLabel: 'Reviewing',
        },
        authorization: {
          viewRoles: ['Admin', 'Librarians'],
          editRoles: ['Admin'],

        },
        form: 'dataPublication-1.0-reviewing',
        displayIndex: 4
      }
    },
    "publishing": {
      config: {
        workflow: {
          stage: 'publishing',
          stageLabel: 'Publishing',
        },
        authorization: {
          viewRoles: ['Admin', 'Librarians'],
          editRoles: ['Admin', 'Librarians'],
          transitionRoles: ['Admin']
        },
        form: 'dataPublication-1.0-publishing',
        displayIndex: 5
      }
    },
    "published": {
      config: {
        workflow: {
          stage: 'published',
          stageLabel: 'Published',
        },
        authorization: {
          viewRoles: ['Admin', 'Librarians'],
          editRoles: ['Admin']
        },
        form: 'dataPublication-1.0-published',
        displayIndex: 6
      }
    },
    "retired": {
      config: {
        workflow: {
          stage: 'retired',
          stageLabel: 'Retired',
        },
        authorization: {
          viewRoles: ['Admin', 'Librarians'],
          editRoles: ['Admin']
        },
        form: 'dataPublication-1.0-retired',
        displayIndex: 7
      }
    }

  },
  // The "Existing Locations" workflow...
  "existing-locations": {
    "existing-locations-draft": {
      config: {
        workflow: {
          stage: 'existing-locations-draft',
          stageLabel: 'Draft',
        },
        authorization: {
          viewRoles: ['Admin', 'Librarians'],
          editRoles: ['Admin', 'Librarians']
        },
        form: 'existing-locations-1.0-draft',
        displayIndex: 0,
        dashboard: {
          table: {
            rowConfig: [
              {
                title: '@workspace-name',
                variable: 'metadata.title',
                template: "<%= metadata.title %>",
                initialSort: 'desc'
              },
              {
                title: '@workspace-type',
                variable: 'metadata.storage_type',
                template: "<%= metadata.storage_type %>"
              },
              {
                title: '@related-rdmp-title',
                variable: 'metadata.rdmpOid',
                template: "<a href='/<%= branding %>/<%= portal %>/record/view/<%= metadata.rdmpOid %>'><%= metadata.rdmpTitle %></a>"
              }
            ]
          }
        }
      },
      starting: true
    }
  }
};
