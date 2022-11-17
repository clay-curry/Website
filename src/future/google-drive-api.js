const { google } = require('googleapis');
const path = require('path');
const fs = require('fs')

const CLIENT_ID = '255425819750-6lsmg93773c5vkbsu8jq941p234s8cjq.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

const REFRESH_TOKEN = '1//041Dephgtg4GICgYIARAAGAQSNwF-L9Irx6IcONp12NDmvjsS4Ruz_KD8Yyl7TDCPqlpJHw9tzE_m0laGUdlOTuM1_XR_2X85PKU'
oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

const drive = google.drive({
  version: 'v3',
  auth: oauth2Client
})

async function load_tree_by_root_id(folderId){
  let nodes = []
  let children = []
  res = await drive.files.list({
    q: `'${folderId}' in parents`
  });
  for (const file of res.data.files)
  {
    if (file.mimeType.includes('folder'))
    { 
      children.push(new Map([[file.name, await load_tree_by_root_id(file.id)]]));
    }
    else
      nodes.push(file.id);
  }
  return {nodes, children}
}

function read_paragraph_element(elem){
  let text_run = elem['textRun']
  if (! text_run)
      return ''
  return text_run.content.replace(/[\n\r]/g,'')
}

function read_structural_elements(elements){
  structural_elements = []
  for (const value of elements)
  {
    if (Object.keys(value).includes('paragraph'))
    {
      style = value.paragraph.paragraphStyle.namedStyleType
      text = ""
      value.paragraph.elements.forEach(elem => {
          text += read_paragraph_element(elem)
        });
      structural_elements.push([style, text])
    }
  }
  return structural_elements
}


async function load_content_at_id(id){
  const docs = google.docs({
    version: 'v1',
    auth: oauth2Client
  })
  const doc = await docs.documents.get({
    documentId: id
  })
  console.log("Title: " + doc.data.title);
  console.log("Body: " + read_structural_elements(doc.data.body.content));
}

async function load_website_tree() {
  ls_drive = (await drive.files.list()).data.files
  website_dir = ls_drive.filter(f => f.name == "Website")[0]
  t = new Map([['root', await load_tree_by_root_id(website_dir.id)]])
  console.log(t)
}

export { load_website_tree, load_content_at_id }