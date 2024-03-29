import React, { useEffect, useState } from 'react'
import GettingStarted from '../../../Components/GettingStarted/GettingStarted';
import XEditor from './XEditor/XEditor';
import XBuger from './XBuger/XBuger';
import Toaster from '../../../Utils/Constants/Toaster';
import BugSevice from '../../../Services/Bug/BugSevice';
import LocalStore from '../../../Store/LocalStore';
import PreLoader from '../../../Components/PreLoader/PreLoader';

export default function Home() {
  const userEmail = LocalStore.getToken().email
  const [loading, setLoading] = useState(false)
  const [bugReport, setBugReport] = useState(null)
  const [bugNative, setBugNative] = useState(null)
  const [bugReference, setBugReference] = useState(null)
  const [bugFavorites, setBugFavorites] = useState(false)
  const [bugStarred, setBugStarred] = useState(false)

  const handleFixErrorSubmit = async (editorContent) => {
    setLoading(true);
    setBugReport(null)
    setBugNative(null)
    setBugReference(null)
    setBugStarred(false)
    setBugFavorites(false)
    Toaster.loadingToast('Analyzing Bug...');
    try {
      const result = await BugSevice.getBugReport(userEmail, editorContent);
      if (result.data.code === 200) {
        setBugReport(result.data.data)
        Toaster.justToast('success', 'Bug Analyzed', () => {
        });
      }
    } catch (error) {
      console.error(error);
      alert(error)
    } finally {
      setLoading(false);
      Toaster.dismissLoadingToast();
    }
  };
  const getNativeLanguage = async (id) => {
    setLoading(true);
    Toaster.loadingToast('Analyzing Bug...');
    try {
      const result = await BugSevice.getNativeLanguage(userEmail, id);
      if (result.data.code === 200) {
        setBugNative(result.data.data)
        Toaster.justToast('success', 'bug in native language', () => {
        });
      }
    } catch (error) {
      console.error(error);
      alert(error)
    } finally {
      setLoading(false);
      Toaster.dismissLoadingToast();
    }
  }
  const generateBugReference = async (id) => {
    setLoading(true);
    Toaster.loadingToast('Analyzing Bug...');
    try {
      const result = await BugSevice.generateBugReference(userEmail, id);
      if (result.data.code === 200) {
        setBugReference(result.data.data)
        Toaster.justToast('success', 'bug references fetched', () => {
        });
      }
    } catch (error) {
      console.error(error);
      alert(error)
    } finally {
      setLoading(false);
      Toaster.dismissLoadingToast();
    }
  }
  const addBugToFavourite = async (id) => {
    setLoading(true);
    Toaster.loadingToast('Adding To Favourite...');
    try {
      const result = await BugSevice.addBugToFavourite(userEmail, id);
      if (result.data.code === 200) {
        // setBugFavorites(result.data.data.bug[0].favourite)
        setBugFavorites(true)
        Toaster.justToast('success', 'bug added to favorites', () => {
        });
      }
    } catch (error) {
      console.error(error);
      alert(error)
    } finally {
      setLoading(false);
      Toaster.dismissLoadingToast();
    }
  }
  const addBugToStarred = async (id) => {
    setLoading(true);
    Toaster.loadingToast('Adding To Starred...');
    try {
      const result = await BugSevice.addBugToStarred(userEmail, id);
      if (result.data.code === 200) {
        // setBugStarred(result.data.data.bug[0].starred)
        setBugStarred(true)
        Toaster.justToast('success', 'bug added to Starred', () => {
        });
      }
    } catch (error) {
      console.error(error);
      alert(error)
    } finally {
      setLoading(false);
      Toaster.dismissLoadingToast();
    }
  }
  return (
    <div className="body-wrapper  py-3 " style={{ marginLeft: '230px', height: '100%' }}>
      <div className="container h-100" style={{ maxWidth: 'none' }}>
        <div className="d-flex justify-content-between h-100">
          <XEditor loading={loading} handleFixErrorSubmit={handleFixErrorSubmit} />

          {
            bugReport !== null ? (
              <XBuger
                loading={loading}
                bugNative={bugNative}
                bugReport={bugReport}
                bugReference={bugReference}
                getNativeLanguage={getNativeLanguage}
                generateBugReference={generateBugReference}
                addBugToFavourite={addBugToFavourite}
                addBugToStarred={addBugToStarred}
                bugStarred={bugStarred}
                bugFavorites={bugFavorites}
              />
            ) : (
              loading ? (<PreLoader />) : (<GettingStarted />)
            )
          }

        </div>
      </div>
    </div>
  )
}
