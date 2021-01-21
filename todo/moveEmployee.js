const employees = {
  uniqueId: 1,
  name: 'Mark Zuckerberg',
  subordinates: [
    {
      uniqueId: 2,
      name: 'Sarah Donald',
      subordinates: [
        {
          uniqueId: 5,
          name: 'Bob Saget',
          subordinates: [
            {
              uniqueId: 8,
              name: 'Tyler Simpson',
              subordinates: []
            },
          ]
        },
        {
          uniqueId: 6,
          name: 'Tina Teff',
          subordinates: []
        },
        {
          uniqueId: 7,
          name: 'Will Turner',
          subordinates: [{
            uniqueId: 9,
            name: 'Harry Tobs',
            subordinates: []
          },]
        },
      ]
    },
    {
      uniqueId: 3,
      name: 'Cassandra Reynolds',
      subordinates: [
        {
          uniqueId: 10,
          name: 'Thomas Brown',
          subordinates: []
        },
        {
          uniqueId: 11,
          name: 'George Carrey',
          subordinates: []
        },
        {
          uniqueId: 12,
          name: 'Gary Styles',
          subordinates: []
        },
      ]
    },
    {
      uniqueId: 4,
      name: 'Mary Blue',
      subordinates: []
    },
  ],
}

function moveEmployee(fromUniqueId, toUniqueId, ceo) {
  let listStaff = [];
  let firstStaff = {
    parentId: null,
    name: ceo.name,
    uniqueId: ceo.uniqueId,
    // subs: ceo.subordinates,

  }
  listStaff.push(firstStaff);
  travelChild(ceo.uniqueId, ceo.subordinates, listStaff);

  let updatedListStaff = listStaff.map(el => {
    if (el.uniqueId === fromUniqueId) {
      return {
        ...el,
        parentId: toUniqueId,
      }
    } else {
      return el;
    }
  })
  return buildTreeData(updatedListStaff)

}


function travelChild(parentId, subs, staffs) {
  if (subs.length === 0) {
    return;
  }
  subs.forEach(sub => {
    staffs.push({
      parentId: parentId,
      name: sub.name,
      uniqueId: sub.uniqueId,
      // subs: sub.subordinates,
    })
    travelChild(sub.uniqueId, sub.subordinates, staffs)
  })
}

const buildTreeData = dataset => {
  const hashTable = Object.create(null);
  const dataTree = [];
  if (dataset.length > 0) {
    dataset.forEach(
      aData =>
        (hashTable[aData.uniqueId] = {
          uniqueId: aData.uniqueId,
          subordinates: [],
          name: aData.name,
        }),
    );
    dataset.forEach(aData => {
      if (aData.parentId && hashTable[aData.parentId])
        hashTable[aData.parentId].subordinates.push(hashTable[aData.uniqueId]);
      else dataTree.push(hashTable[aData.uniqueId]);
    });
  }
  return dataTree;
};

console.log('moveEmployee', moveEmployee(3, 4, employees))

