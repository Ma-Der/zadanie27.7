import uuid from 'uuid';
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMBS_UP = 'THUMBS_UP';
export const THUMBS_DOWN = 'THUMBS_DOWN';

  // KREATORY AKCJI //

    // TWORZENIE KOMENTARZA //

  export function addComment(text) {
      return {
        type: ADD_COMMENT,
        text: text,
        id: uuid.v4()
      }
    }


    // EDYCJA KOMENTARZA //

export function editComment(id, text) {
      return {
        type: EDIT_COMMENT,
        text: text,
        id: id
      }
    }

    // USUWANIE KOMENTARZA //

  export function removeComment(id) {
      return {
        type: REMOVE_COMMENT,
        id: id
      }
    }

    // THUMBS UP & DOWN //

  export function thumbsUp(id) {
      return {
        type: THUMBS_UP,
        id: id,
        thumbsUpCount: 0,
      }
    }

  export function thumbsDown(id) {
      return {
        type: THUMBS_DOWN,
        id: id,
        thumbsDownCount: 0,
      }
    }
