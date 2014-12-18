// client.js

Schemas = {};
SimpleSchema.debug = true;

//Template.registerHelper('Schemas', Schemas);

Schemas.Unit = new SimpleSchema({
  // Faculty – teacher or teachers of class.
  faculty: {
    type: String,
    optional: true,
  },
  subject_group: {
    type: String,
    autoform: {
      type: 'select-radio',
      options: {
        interdiciplinary: 'Interdisciplinary',
        arts: 'Arts',
        design: 'Design',
        health_and_pe: 'Health and Physical Education',
        individuals_and_society: 'Individuals and Society',
        language_acquisition: 'Language Acquisition',
        language_and_literature: 'Language and Literature',
        mathematics: 'Mathematics',
        sciences: 'Sciences',
      }
    },
  },
  discipline: {
    type: String,
  },
  unit_title: {
    type: String,
  },
  myp_year: {
    type: [Number],
    label: 'MYP Year',
    autoform: {
      type: 'select-checkbox-inline',
      options: [
        {label: '1', value: 1},
        {label: '2', value: 2},
        {label: '3', value: 3},
        {label: '4', value: 4},
        {label: '5', value: 5},
      ],
    },
  },
  teaching_hours: {
    type: Number,
    optional: true,
  },
  // Key Concepts
  key_concept: {
    type: String,
    allowedValues: [
      'communication',
      'communities',
      'development',
      'systems',
    ],
    autoform: {
      type: 'select-radio-inline',
      options: [
        {label: 'Communication', value: 'communication'},
        {label: 'Communities', value: 'communities'},
        {label: 'Development', value: 'development'},
        {label: 'Systems', value: 'systems'},
      ],
    },
  },
  // Related Concepts
  related_concepts: {
    type: [String],
    allowedValues: [
      'adaption',
      'collaboration',
      'ergonomics',
      'evaluation',
      'form',
      'function',
      'innovation',
      'invention',
      'markets-and-trends',
      'perspective',
      'resources',
      'sustainability',
    ],
    autoform: {
      type: 'select-checkbox',
      options: [
        {label: 'Adaption', value: 'adaption'},
        {label: 'Collaboration', value: 'collaboration'},
        {label: 'Ergonomics', value: 'ergonomics'},
        {label: 'Evaluation', value: 'evaluation'},
        {label: 'Form', value: 'form'},
        {label: 'Function', value: 'function'},
        {label: 'Innovation', value: 'innovation'},
        {label: 'Invention', value: 'invention'},
        {label: 'Markets and Trends', value: 'markets-and-trends'},
        {label: 'Perspective', value: 'perspective'},
        {label: 'Resources', value: 'resources'},
        {label: 'Sustainability', value: 'sustainability'},
      ],
    },
  },
  // Global Context
  global_context: {
    type: String,
    allowedValues: [
      'identities_and_relationships',
      'orientation_in_space_and_time',
      'personal_and_cultural_expression',
      'scientific_and_technical_innovation',
      'globalization_and_sustainability',
      'fairness_and_development',
    ],
    autoform: {
      type: 'select-radio',
      options: [
        {label: 'Identities and Relationships',
          value: 'identities_and_relationships'},
        {label: 'Orientation in Space and Time',
          value: 'orientation_in_space_and_time'},
        {label: 'Personal and Cultural Expression',
          value: 'personal_and_cultural_expression'},
        {label: 'Scientific and Technical Innovation',
          value: 'scientific_and_technical_innovation'},
        {label: 'Globalization and Sustainability',
          value: 'globalization_and_sustainability'},
        {label: 'Fairness and Development',
          value: 'fairness_and_development'},
      ],
    },
  },
  // Statement of Inquiry
  statement_of_inquiry: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: 'textarea',
      },
    },
  },
  // Inquiry Questions
  factual_questions: {
    type: [String],
    optional: true,
    autoform: {
      afFieldInput: {
        type: 'textarea',
      },
    },
  },
  conceptual_questions: {
    type: [String],
    optional: true,
    autoform: {
      afFieldInput: {
        type: 'textarea',
      },
    },
  },
  debatable_questions: {
    type: [String],
    optional: true,
    autoform: {
      afFieldInput: {
        type: 'textarea',
      },
    },
  },
  // Objectives
  objectives: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: 'textarea',
      },
    },
  },
  // Summative Assessment
  summative_assessment: {
    type: String,
    //optional: true,
    autoform: {
      afFieldInput: {
        type: 'textarea',
      },
    },
  },
  sa_relationship_to_soi: {
    type: String,
    label: 'Relationship between assessment and SOI',
    optional: true,
    autoform: {
      afFieldInput: {
        type: 'textarea',
      },
    },
  },
  // Approaches to Learning
  approaches_to_learning: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: 'textarea',
      },
    },
  },
  // Content
  content: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: 'textarea',
      },
    },
  },
  // Learning Process
  learning_experiences_and_teaching_strategies: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: 'textarea',
      },
    },
  },
  formative_assessment: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: 'textarea',
      },
    },
  },
  differentiation: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: 'textarea',
      },
    },
  },
});

// Helpers

if (Meteor.isClient) {

  Template.registerHelper('currentFieldValue', function (fieldName) {
    return AutoForm.getFieldValue('units', fieldName) || 'not selected';
  });

}

var Collections = {};

//Template.registerHelper('Collections', Collections);

Units = Collections.Units = new Mongo.Collection('Units');
Units.attachSchema(Schemas.Unit);

Meteor.publish(null, function () {
  return Units.find();
});

Units.allow({
  insert: function () {
    return true;
  },
  remove: function () {
    return true;
  },
});
