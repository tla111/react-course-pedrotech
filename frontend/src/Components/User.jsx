export const User = (props) => (
    <div key={props.key} style={{ display: "flex" }}>
        <h1>{props.name}</h1>
        <h1 style={{ marginLeft: "5px" }}>{props.age}</h1>
    </div>
)
