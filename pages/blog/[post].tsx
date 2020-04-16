import React, { ReactElement } from 'react'

export default function PostTemplate(props: any): ReactElement {
  return <div>{props.post}</div>
}
PostTemplate.getInitialProps = async (context: any): Promise<any> => {
  const { post } = context.query

  return { post }
}
