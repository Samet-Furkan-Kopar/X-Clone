import classNames from 'classnames';
import {useTab} from './context'
import PropTypes from 'prop-types'

export default function Item ({children, id}) {
    const {active, setActive} = useTab()

  return (
    <button type="button" onClick={()=> setActive(id)} className="flex-auto text-center">
      <div className={classNames({
        "h-[3.313rem] relative inline-flex items-center": true,
        "text-[color:var(--color-base-secondary)] font-medium": active !== id,
        "font-bold": active === id
      })}>
        {children}
       {active === id && <div className="h-[4px] absolute bottom-0 left-0 w-full rounded-full bg-[color:var(--color-primary)] "/>}
      </div>
    </button>
  )
}

Item.propTpes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    id: PropTypes.string
    }
