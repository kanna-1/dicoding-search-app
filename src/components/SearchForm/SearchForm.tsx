"use client"

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import courses, { Course } from "@/models/courses";
import "./searchForm.css";

/**
 * A search form component that allows users to search for courses.
 * @component
 */
export function SearchForm() {
  const [searchResult, setSearchResult] = useState<Course[] | null>(null);

  /**
   * Handles the change event of the search input.
   * Filters the list of courses based on the user input.
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const searchInput = e.target.value.toLowerCase().trim();
  const searchWords = searchInput.split(" ");
  const searchResult = courses.filter((course) => {
    const courseName = course.name.toLowerCase();
    return searchWords.every((word) => courseName.includes(word));
  });
  setSearchResult(searchResult);
};
  
  return (
    <div>
     {/* Search input field */}
      <Input
        className="search-input"
        placeholder="Search"
        onChange={handleChange}
      />
      
      <>
        {searchResult && searchResult.length > 0 ? (
          <div>
            <h2>Search Results:</h2>
            <div className="search-results">
              {searchResult.map((course) => (
                <div key={course.id} className="course-card">
                  <h3 className="course-name">{course.name}</h3>
                  <p>{course.summary}</p>
                  <a href={course.course_link}>Learn More</a>
                  <div/>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="no-results">
            <p>No results found.</p>
          </div>
        )}
      </>
    </div>
  );
}
