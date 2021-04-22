const API_URL = 'http://localhost:3333';

export function USER_POST(body){
  return {
    url: `${API_URL}/users`,
    options: {
      method: 'POST',
      body: JSON.stringify(body)
    }
  }
}

export function USERS_GET(){
  return {
    url: `${API_URL}/users`,
    options: {
      method: 'GET'
    }
  }
}

export function USER_GET(id){
  return {
    url: `${API_URL}/users/${id}`,
    options: {
      method: 'GET'
    }
  }
}

export function USER_UPDATE(id, body){
  return {
    url: `${API_URL}/users/${id}`,
    options: {
      method: 'PUT',
      body: JSON.stringify(body)
    }
  }
}

export function USER_DELETE(id){
  return {
    url: `${API_URL}/users/${id}`,
    options: {
      method: 'DELETE'
    }
  }
}