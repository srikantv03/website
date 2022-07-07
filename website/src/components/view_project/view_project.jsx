import { useParams } from 'react-router-dom';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ProjectInfo from './project_info.mjs';
import './../../index.css';

export default function ViewProject(props) {

    let { projectName } = useParams();

    const [markdown, setMarkdown] = useState('');
    
    if (ProjectInfo[projectName] != undefined) {
        fetch(ProjectInfo[projectName].markdown).then((response) => response.text()).then((text) => {
            console.log(text)
            setMarkdown(text);
        });

        return (
            <div className="markdown-section">
                  <ReactMarkdown>{ markdown }</ReactMarkdown>
            </div>
        );
    } else {
        return (
            <div>
                <h1>This site does not exist</h1>
            </div>
        )
    }
}

