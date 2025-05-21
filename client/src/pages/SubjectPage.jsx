import React from 'react';
import { useParams } from 'react-router-dom';

const SubjectPage = () => {
  const { subjectName } = useParams();

  return (
    <div className="container py-4">
      <h2 className="fw-bold text-capitalize">{subjectName} Page</h2>
      <p>Details about {subjectName} teachers will be shown here.</p>
    </div>
  );
};

export default SubjectPage;