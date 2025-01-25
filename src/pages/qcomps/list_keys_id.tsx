interface Person {
    id: number;
    name: string;
    profession: string;
    accomplishment: string;
    imageId: string;
  }
  
  const people: Person[] = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'szV5sdG'
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'YfeOqp2'
  }];
  
  function getImageUrl(imageId: string): string {
      return `https://i.imgur.com/${imageId}s.jpg`;
  }
  
  export default function List() {
    const listItems = people.map(person => (
      <li key={person.id}>
        <img 
          src={getImageUrl(person.imageId)} 
          alt={person.name}
        />
        <p>
          <b>{person.name}</b>
          ({person.profession}) - {person.accomplishment}
        </p>
      </li>
    ));
  
    return <ul>{listItems}</ul>;
  }