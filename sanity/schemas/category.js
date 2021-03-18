import { FaLayerGroup as icon } from 'react-icons/fa';

export default {
  // computer name of dataset
  name: 'category',
  // visible title
  title: 'Categories',
  type: 'document',
  // destructured as it's taking icon from the object with the same name
  icon,
  fields: [
    {
      name: 'name',
      title: 'Category Name',
      type: 'string',
      description: 'What is the name of the category?',
    },
    // {
    //   name: 'casestudy',
    //   title: 'Case Study',
    //   type: 'boolean',
    //   description: 'Is this a case study?',
    //   options: {
    //     layout: 'checkbox',
    //   },
    // },
  ],
  //   preview: {
  //     select: {
  //       name: 'name',
  //       casestudy: 'casestudy',
  //     },
  //     prepare: ({ name, casestudy }) => ({
  //       title: `${name} ${casestudy ? '🌱' : ''}`,
  //     }),
  //   },
};
