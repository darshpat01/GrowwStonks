interface TagsProps {
  tagType: string;
  tag: string;
}

export default function Tags({
  tagType,
  tag,
}: {
  tagType: string;
  tag: string;
}) {
  return (
    <>
      <div className="p-2 m-2 border border-black dark:border-white rounded-3xl">
        <div className=" flex flex-wrap capitalize">
          {tagType}: {tag}
        </div>
      </div>
    </>
  );
}
