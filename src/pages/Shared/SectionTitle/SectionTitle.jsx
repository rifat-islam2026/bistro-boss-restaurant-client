
const SectionTitle = ({heading,subHeading}) => {
  return (
    <div className="w-3/12 mx-auto my-10 text-center">
          <p className="text-yellow-600 font-semibold border-b-2 py-2"> --- {subHeading} --- </p>
          <h2 className="text-2xl font-bold uppercase border-b-2 py-2">{heading}</h2>
    </div>
  )
}

export default SectionTitle
