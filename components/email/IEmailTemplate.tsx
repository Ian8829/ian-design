export type IEmailTemplateProps = {
  subject: string
  message: string
  email: string
}

const IEmailTemplate: React.FC<Readonly<IEmailTemplateProps>> = ({
  subject,
  message,
  email,
}) => (
  <div>
    <h1>
      This mail is from {'<'}IAN DEV{'>'} your portfolio web site.
    </h1>
    <h3>Email: {email}</h3>
    <h3>Subject: {subject}</h3>
    <p>{message}</p>
  </div>
)

export default IEmailTemplate
