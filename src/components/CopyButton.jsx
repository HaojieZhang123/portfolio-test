import { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

/**
 * CopyButton
 * Props:
 * - value: string to copy to clipboard
 * - icon: FontAwesome icon object to show when not copied
 * - ariaLabel: accessible label
 */
const CopyButton = ({ value, icon, ariaLabel = 'Copy' }) => {
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef(null)

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      // clear previous timeout if any
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => setCopied(false), 1500)
    } catch (e) {
      // fallback: try execCommand if needed (older browsers)
      // eslint-disable-next-line no-console
      console.error('Copy failed', e)
    }
  }

  return (
    <button
      type="button"
      className={`social-button ${copied ? 'copied' : ''}`}
      onClick={handleClick}
      aria-label={ariaLabel}
      title={copied ? 'Copied!' : ariaLabel}
    >
      <span className="icon" aria-hidden>
        <FontAwesomeIcon icon={copied ? faCheck : icon} />
      </span>
    </button>
  )
}

export default CopyButton
