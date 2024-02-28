import styles from './avatar.module.css'

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement>{
  hasBorder?: boolean
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  )
}
