import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_CHAPTER } from "../utils/actions";
import { QUERY_CHAPTER } from "../utils/queries";
import { idbPromise } from "../../utils/helpers";
import TableOfContents from '../components/TableOfContents';
import CommitList from '../components/CommitList';
const EditChapter = () => {

    function commitChanges() {

    }

    return (
        <div>
            <div className="row">
                <div className="col-3"><TableOfContents /></div>
                <div className='col-9'>
                    <textarea id="chapter-text" name="chapter-text">{currentChapter.chapterText}</textarea>
                </div>
            </div>
            <div id="button-container">
                <button className="float-center" onClick={commitChanges()}>Commit</button>
            </div>
            <div id="commit-container">
                <CommitList />
            </div>
        </div>
    );
};

export default EditChapter;