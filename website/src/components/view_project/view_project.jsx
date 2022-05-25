import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ProjectData from './project_data.mjs';
import './../../index.css';

export default function ViewProject(props) {

    let { projectName } = useParams();

    return (
        <div className="markdown-section">
              <ReactMarkdown>{ ProjectData["sudoku_solver"].markdown }</ReactMarkdown>
        </div>
    );
}

