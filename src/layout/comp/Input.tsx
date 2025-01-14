import { Input as BulmaInput, Control, Field } from '@seagreenio/react-bulma'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { FormEvent, useCallback } from 'react'
import { MdSearch } from 'react-icons/md/'

interface Props {
  docInfo: Record<string, any>
  searchValue: string
  setSearchValue: (value: string) => void
}

export function SearchInput({
  docInfo: { type, version },
  searchValue,
  setSearchValue,
}: Props) {
  const { t, navigate } = useI18next()

  const handleSearchInputKeyDown = useCallback(
    (e: FormEvent) => {
      e.preventDefault()

      navigate(`/search?type=${type}&version=${version}&q=${searchValue}`, {
        state: {
          type,
          version,
          query: searchValue,
        },
      })
    },
    [type, version, searchValue]
  )

  return (
    <Field as="form" onSubmit={handleSearchInputKeyDown}>
      <Control hasIcons="left">
        <BulmaInput
          type="search"
          placeholder={t('navbar.searchDocs')}
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
        <span className="icon is-left">
          <MdSearch />
        </span>
      </Control>
    </Field>
  )
}
