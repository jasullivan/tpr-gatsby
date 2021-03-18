import { MdFolder as icon } from 'react-icons/md';

export default {
  // computer name of dataset
  name: 'project',
  // visible title
  title: 'Projects',
  type: 'document',
  // destructured as it's taking icon from the object with the same name
  icon,
  // input fields to fillout in the CMS
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
      description: 'Name of the project',
    },
    // slug will create a field to generate a user friendly url version of the name entered
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        // user can create a focus point which is then carried over on whatever image size is viewed.
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      // type topping is the name in topping.js
      // this uses the array and the reference schema types
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    },
  ],
  preview: {
    select: {
      // title is just how it appears in your preview function. so it could be name, title, called anything
      title: 'name',
      media: 'image',
      // this is just the sanity syntax to get toppings based on index - gets the first 4 topping, from toppings
      // says get the toppings array, grab the item at index 0 and grab it's name
      // NB the toppings array is created from this schema not topping.js
      category0: 'categories.0.name',
      category1: 'categories.1.name',
      category2: 'categories.2.name',
      category3: 'categories.3.name',
      category4: 'categories.4.name',
      category5: 'categories.5.name',
    },
    // fields.name and fields.vegetarian has been destructured. ...toppings puts them in a new object called toppings
    prepare: ({ title, media, ...categories }) => {
      // Object.values() turns toppings object into an array to allow join to work
      // filter undefined toppings out
      const cats = Object.values(categories).filter(Boolean);
      // return preview object for the pizza
      return {
        title,
        media,
        subtitle: cats.join(', '),
      };
    },
  },
};
