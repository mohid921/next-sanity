export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'keywords',
      type: 'string',
      title: 'keywords{ add coma( , ) after each keyword }'
    },
    // {
    //   name: 'author',
    //   title: 'Author',
    //   type: 'reference',
    //   to: {type: 'author'},
    // },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    // {
    //   name: 'categories',
    //   title: 'Categories',
    //   type: 'array',
    //   of: [{type: 'reference', to: {type: 'category'}}],
    // },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'metadesc',
      type: 'string',
      title: 'Meta Description(blog-post)'
    },
    {
      name: 'metadesc2',
      type: 'string',
      title: 'Meta Description(Seo)'
    },
    {
      name: 'category',
      title: 'Main Category',
      type: 'string',
    },
    {
      name: 'subcategory',
      title: 'SubCategory',
      type: 'string',
    },
    {
      name: 'categoryI',
      title: 'Category1',
      type: 'string',
    },
    {
      name: 'categoryII',
      title: 'Category2',
      type: 'string',
    },
    {
      name: 'Name',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'Owner',
      title: 'Originally published at',
      type: 'string',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
    },
    
  ],
  
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
