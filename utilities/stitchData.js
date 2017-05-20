const makeTimeline = (timeline, stories) => {
  const timelineDates = timeline.map(point => point.date);

  if (timeline.length === 0) {
    return null;
  }

  stories.forEach(story => {
    // add stories to matching the timeline date
    timeline.forEach(point => {
      if (point.date === story.date) {
        point['stories'] = story.stories;
      }
    });
  });

  return timeline;
};

const makeResponse = (timeSeries, peakStories, searchString, relatedTopics) => {
  const timeline = makeTimeline(timeSeries, peakStories, relatedTopics);

  const response = {
    timeline: timeline,
    trend: searchString.slice(1, -1),
    relatedTopics: relatedTopics
  };

  return response;
};

module.exports = makeResponse;
