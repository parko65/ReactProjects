import { Button } from '@fluentui/react-components'

function MyButton({text}: {text: string}) {
  return <Button appearance="primary">{text}</Button>
}

export default MyButton