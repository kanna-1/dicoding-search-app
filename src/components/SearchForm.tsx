"use client"
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import courses, { Course } from "@/models/courses";

export function SearchForm() {
  const [searchResult, setSearchResult] = useState<Course[] | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchInput = e.target.value.toLowerCase().trim();
    const searchResult = courses.filter((course) => {
      const courseWords = course.name.toLowerCase().split(" ");
      return courseWords.some((word) => word === searchInput);
    });
    setSearchResult(searchResult);
  };


  return (
    <div >
      <Input
        style={{ fontSize: 18, borderRadius: 20, padding: 8, marginLeft: 12, marginTop: 12 }}
        placeholder="Search"
        onChange={handleChange}
      />

      <>
        {searchResult && searchResult.length > 0 ? (
          <div>
            <h2>Search Results:</h2>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {searchResult.map((course) => (
                <div
                  key={course.id}
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    padding: "16px",
                    margin: "8px",
                    width: window.innerWidth / 3.5,
                  }}
                >
                  <h3 style={{ fontSize: 16, fontWeight: "bold" }}>{course.name}</h3>
                  <p>{course.summary}</p>
                  <a href={course.course_link}>Learn More</a>
                </div>
              ))}
            </div>
          </div>
          ) : (
            <div style={{ fontSize: 20, marginTop: 180, alignItems: "center", textAlign: "center" }}>
              <p>No results found.</p>
            </div>
          )}
      </>
    </div>
  );
}
