import React, { ReactElement } from 'react'

export default function PostTemplate(props: any): ReactElement {
  const { post } = props
  return <div>{post}</div>
}
PostTemplate.getInitialProps = async (context: any): Promise<any> => {
  const { post } = context.query

  return { post }
}
