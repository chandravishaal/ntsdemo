import { useParams } from "react-router-dom"

const Coin = () => {

    const { coin } = useParams()

  return (
    <div>{coin}</div>
  )
}

export default Coin