/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSquad = /* GraphQL */ `
  query GetSquad($id: ID!) {
    getSquad(id: $id) {
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
export const listSquads = /* GraphQL */ `
  query ListSquads(
    $filter: ModelSquadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSquads(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        squadname
        productowner {
          nextToken
        }
        scrummaster {
          nextToken
        }
        scrumteam {
          nextToken
        }
        velocity
        status
        createdby
        updatedby
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
