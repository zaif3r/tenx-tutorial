import React from "react"

type InlineCodeProps = {
  children: React.ReactNode
}

const InlineCode: React.FC<InlineCodeProps> = ({ children }) => {
  return <code className="mockup-code">{children}</code>
}

export default InlineCode
