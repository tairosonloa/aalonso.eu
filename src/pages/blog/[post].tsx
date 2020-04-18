import matter from 'gray-matter'
import React, { ReactElement } from 'react'
import ReactMarkdown from 'react-markdown/with-html'

export default function PostTemplate({ content, data }: any): ReactElement {
  const frontmatter = data

  return (
    <div>
      <h1>{frontmatter.title}</h1>

      <ReactMarkdown
        source={content}
        escapeHtml={false}
        transformImageUri={(uri) =>
          uri.startsWith('http') ? uri : `${process.env.BASE_URL}${uri}`
        }
      />
    </div>
  )
}
PostTemplate.getInitialProps = async (context: any): Promise<any> => {
  const { post } = context.query
  const content = await import(`../../posts/${post}.md`)
  const data = matter(content.default) as any // TODO: create custom type

  // TODO: load images from markdown and use all of the metadata
  return { ...data }
}
