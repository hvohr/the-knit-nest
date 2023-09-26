
import SingleTool from '../components/SingleTool/SingleTool'

function CraftTools(props) {
  return (
    <section>
      <h1>Craft Tools</h1>
      <div>
        {!props.tools.length && <h1>Loading...</h1>}
        {props.tools.length && <SingleTool tools={props.tools} />}
      </div>
    </section>
  )
}

export default CraftTools