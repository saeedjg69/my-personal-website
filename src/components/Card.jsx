const Card = ({ name, git, desc, responsive, technologies }) => {
 return (
  <div className="block md:w-5/12 border rounded p-2 hover:scale-105 duration-200 shadow-2xl">
   <a href={`http://${name}.saeidjafari.ir/`} target="_blank">
    <img
     src={require(`../assets/img/${name}.jpg`)}
     alt="academyProject"
     className="rounded"
    />
   </a>
   <a
    href={`http://${name}.saeidjafari.ir/`}
    target="_blank"
    className="block font-bold text-center text-xl text-secondary p-2 hover:text-white duration-200"
   >
    {name}
   </a>
   <hr className="w-1/2 mx-auto" />
   <h1 className="text-center p-2">
    {desc} <br />
    {responsive ? "responsive" : "no responsive"}
   </h1>
   <h1>Technologies: {technologies}</h1>
   <hr className={git ? "my-2" : "hidden"} />

   <a
    href={`https://github.com/saeedjg69/${git}`}
    target="_blank"
    className="text-secondary hover:text-white duration-200"
   >
    {git ? `https://github.com/saeedjg69/${git}` : null}
   </a>
  </div>
 );
};

export default Card;
