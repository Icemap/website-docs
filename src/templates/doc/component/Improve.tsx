import { Trans } from 'gatsby-plugin-react-i18next'
import { wrapPathWithLang } from 'lib/utils'

interface Props {
  repoInfo: Record<string, any>
  lang: string
}

export function Improve({ repoInfo, lang }: Props) {
  const { repo, ref, realPath } = repoInfo
  const path = wrapPathWithLang(repo, realPath, lang)

  return (
    <a
      className="doc-help-link improve"
      href={`https://github.com/${repo}/edit/${ref}/${path}`}
      target="_blank"
      rel="noreferrer">
      <Trans i18nKey="doc.improve" />
    </a>
  )
}
