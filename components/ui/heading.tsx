interface HeadingProps{
    title: string;
    description: String;

}

export const Heading: React.FC<HeadingProps> = ({
    title,
    description
}) =>{
    return(
<div>
    <h2>{title}</h2>
    <p>{description}</p>
</div>
    )
}