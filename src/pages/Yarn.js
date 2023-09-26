
import SingleYarn from '../components/SingleYarn/SingleYarn'

function Yarn(props) {
  return (
    <section>
      <h1>Yarn</h1>
      <div>
        {!props.yarn.length && <h1>Loading...</h1>}
        {props.yarn.length && <SingleYarn yarn={props.yarn} />}
      </div>
    </section>
  )
}

export default Yarn