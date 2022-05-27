def anagrams_for(word, list_of_words):
	"""We receive a target word, and a list of strings that could potentially be our target word but scrambled.
 

	Args:
		word (String): This is our target word that we must find within a list of words if they exist
		list_of_words (List): This is our list of words to compare against

	Returns:
		List: List of all words that if any exist that match our target word
	"""
	# We initialize an answer list to return
	answer_list = []
	# Let's loop through each word in the list of words
	for listed_word in list_of_words:
		# If both word, and listed_word while sorted are equal then
		if sorted(word) == sorted(listed_word):
			# Append to the answer list our match
			answer_list.append(listed_word)
	# We have cycled the entire list, let's return our answer list
	return answer_list