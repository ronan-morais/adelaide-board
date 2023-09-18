export default function ImageCard(props) {
  return (
    <div class="w-1/2 relative bg-red-300 min-h-full">
      <img
        class="absolute w-full h-full object-cover"
        src={props.src}
        alt="pub"
      />
    </div>
  )
}