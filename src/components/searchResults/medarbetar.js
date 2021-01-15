useEffect(() => {
    //filter börjar i variabel här 
    const filtered = list.filter((item) => {

      if (!a) return false;
      let include = true;

      if (selectedVerksamheter !== '' && !get(a, 'verksamhetsomrade', []).includes(parseInt(selectedVerksamheter))) {
        include = false;
      }
      if (
        selectedRegioner !== '' &&
        !get(a, 'region', []).includes(parseInt(selectedRegioner))
      ) {
        include = false;
      }
      if (
        search !== '' &&
        get(a, 'title.rendered', [])
          .toLowerCase()
          .indexOf(search.toLowerCase()) === -1 &&
        get(a, 'acf.titel', []).toLowerCase().indexOf(search.toLowerCase()) ===
          -1
      ) {
        include = false;
      }
      return include;
    });
    setFilteredMedarbetare(
      filtered.sort((a, b) => {
        const lastnameA = get(a, 'acf.efternamn', '').toLowerCase();
        const firstnameB = get(b, 'acf.efternamn', '').toLowerCase();
        if (lastnameA > firstnameB) {
          return 1;
        } else {
          return -1;
        }
      })
    );
  }, [medarbetare, selectedVerksamheter, selectedRegioner, search]);