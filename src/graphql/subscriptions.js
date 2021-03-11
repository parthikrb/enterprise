/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      firstname
      lastname
      username
      password
      email
      role
      picture {
        bucket
        region
        key
      }
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      firstname
      lastname
      username
      password
      email
      role
      picture {
        bucket
        region
        key
      }
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      firstname
      lastname
      username
      password
      email
      role
      picture {
        bucket
        region
        key
      }
      status
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSquad = /* GraphQL */ `
  subscription OnCreateSquad {
    onCreateSquad {
      id
      squadname
      productowner {
        items {
          id
          firstname
          lastname
          username
          password
          email
          role
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      scrummaster {
        items {
          id
          firstname
          lastname
          username
          password
          email
          role
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      scrumteam {
        items {
          id
          firstname
          lastname
          username
          password
          email
          role
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      velocity
      status
      createdby
      updatedby
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSquad = /* GraphQL */ `
  subscription OnUpdateSquad {
    onUpdateSquad {
      id
      squadname
      productowner {
        items {
          id
          firstname
          lastname
          username
          password
          email
          role
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      scrummaster {
        items {
          id
          firstname
          lastname
          username
          password
          email
          role
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      scrumteam {
        items {
          id
          firstname
          lastname
          username
          password
          email
          role
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      velocity
      status
      createdby
      updatedby
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSquad = /* GraphQL */ `
  subscription OnDeleteSquad {
    onDeleteSquad {
      id
      squadname
      productowner {
        items {
          id
          firstname
          lastname
          username
          password
          email
          role
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      scrummaster {
        items {
          id
          firstname
          lastname
          username
          password
          email
          role
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      scrumteam {
        items {
          id
          firstname
          lastname
          username
          password
          email
          role
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      velocity
      status
      createdby
      updatedby
      createdAt
      updatedAt
    }
  }
`;
