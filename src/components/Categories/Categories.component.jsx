import CategooryItem from "../Category-item/Category-item.component";
const Categories = () => {
  const list = [
    {
      id: 1,
      name: "name 1",
      desc: "desc 1",
    },
    {
      id: 2,
      name: "name 2",
      desc: "desc 2",
    },
    {
      id: 3,
      name: "name 3",
      desc: "desc 3",
    },
  ];
  return (
    <>
      Categories list
      <div>
        {list.map(({ id, name, desc }) => (
          <CategooryItem key={id} name={name} desc={desc} />
        ))}
      </div>
    </>
  );
};
export default Categories;
