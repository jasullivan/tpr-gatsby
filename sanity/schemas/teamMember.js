import { MdPerson as icon } from 'react-icons/md';

export default {
  // computer name of dataset
  name: 'teamMember',
  // visible title
  title: 'The team',
  type: 'document',
  // destructured as it's taking icon from the object with the same name
  icon,
  // input fields to fillout in the CMS
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
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
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      options: 'Tell us a bit about this person',
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
  ],
  preview: {
    select: {
      // title is just how it appears in your preview function. so it could be name, title, called anything
      title: 'name',
      subtitle: 'jobTitle',
      media: 'image',
    },
    // fields.name and fields.vegetarian has been destructured. ...toppings puts them in a new object called toppings
    prepare: ({ title, subtitle, media }) =>
      // Object.values() turns toppings object into an array to allow join to work
      // filter undefined toppings out
      // return preview object for the pizza
      ({
        title,
        subtitle,
        media,
      }),
  },
};
